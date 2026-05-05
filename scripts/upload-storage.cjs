#!/usr/bin/env node
/* eslint-disable no-console */
// Заливает артефакты electron-builder в Firebase Storage (бакет aura-748c8.firebasestorage.app),
// делает их публично доступными по URL https://storage.googleapis.com/<bucket>/updates/<file>.
// electron-updater читает фид по URL из publish.url в package.json.
//
// Auth: service account JSON. Положи его как serviceAccount.json в корень проекта
// или укажи путь в env var FIREBASE_SERVICE_ACCOUNT.
//
// Получить ключ: Firebase Console → Project Settings → Service Accounts → Generate new private key.

const fs = require('node:fs');
const path = require('node:path');

let admin;
try {
  admin = require('firebase-admin');
} catch (e) {
  console.error('[upload] firebase-admin не установлен. Запусти: npm install');
  process.exit(1);
}

const root = path.join(__dirname, '..');
const releaseDir = path.join(root, 'release');
const BUCKET = 'aura-748c8.firebasestorage.app';
const REMOTE_PREFIX = 'updates';

if (!fs.existsSync(releaseDir)) {
  console.error('[upload] release/ не найдена. Сначала запусти `npm run dist:win` (или dist:mac/linux).');
  process.exit(1);
}

const credPath = process.env.FIREBASE_SERVICE_ACCOUNT
  || path.join(root, 'serviceAccount.json');

if (!fs.existsSync(credPath)) {
  console.error('');
  console.error('[upload] не нашли service account JSON по пути:');
  console.error('   ' + credPath);
  console.error('');
  console.error('Как получить:');
  console.error('  1. Firebase Console → Project Settings → Service Accounts');
  console.error('     https://console.firebase.google.com/project/aura-748c8/settings/serviceaccounts/adminsdk');
  console.error('  2. Generate new private key → скачать JSON.');
  console.error('  3. Положить как serviceAccount.json в корень проекта');
  console.error('     (он уже в .gitignore — в коммит не попадёт).');
  console.error('  Альтернатива: переменная окружения FIREBASE_SERVICE_ACCOUNT с абсолютным путём к JSON.');
  console.error('');
  process.exit(1);
}

let cred;
try {
  cred = JSON.parse(fs.readFileSync(credPath, 'utf8'));
} catch (e) {
  console.error('[upload] не удалось распарсить service account JSON:', e.message);
  process.exit(1);
}

admin.initializeApp({
  credential: admin.credential.cert(cred),
  storageBucket: BUCKET,
});

const bucket = admin.storage().bucket();

const allowedExt = ['.exe', '.yml', '.yaml', '.blockmap', '.dmg', '.zip', '.AppImage', '.deb', '.rpm'];
const files = fs.readdirSync(releaseDir, { withFileTypes: true })
  .filter(e => e.isFile())
  .map(e => e.name)
  .filter(name => allowedExt.some(ext => name.toLowerCase().endsWith(ext)));

if (!files.length) {
  console.error('[upload] нет артефактов в release/');
  process.exit(1);
}

async function ensurePublic() {
  // Делаем bucket публично читаемым ровно один раз — последующие запуски просто увидят, что биндинг уже есть.
  // Без этого URL https://storage.googleapis.com/<bucket>/<path> возвращает 403 даже на public объектах
  // (если у бакета включён uniform bucket-level access — это default для новых buckets).
  try {
    const [policy] = await bucket.iam.getPolicy({ requestedPolicyVersion: 3 });
    const role = 'roles/storage.objectViewer';
    const member = 'allUsers';
    let binding = (policy.bindings || []).find(b => b.role === role);
    if (binding && binding.members && binding.members.includes(member)) {
      return; // already public
    }
    if (!binding) {
      binding = { role, members: [] };
      policy.bindings = policy.bindings || [];
      policy.bindings.push(binding);
    }
    if (!binding.members.includes(member)) binding.members.push(member);
    await bucket.iam.setPolicy(policy);
    console.log('[upload] bucket made public (allUsers:objectViewer)');
  } catch (err) {
    console.warn('[upload] не удалось выставить публичный IAM:', err.message);
    console.warn('  Сделай это руками один раз: gsutil iam ch allUsers:objectViewer gs://' + BUCKET);
    console.warn('  Или в Cloud Console → Storage → bucket → Permissions → ADD: allUsers, role Storage Object Viewer.');
  }
}

async function uploadAll() {
  for (const name of files) {
    const local = path.join(releaseDir, name);
    const remote = `${REMOTE_PREFIX}/${name}`;
    process.stdout.write(`[upload] ${name} ... `);
    const isYml = /\.ya?ml$/i.test(name);
    await bucket.upload(local, {
      destination: remote,
      resumable: true,
      metadata: {
        cacheControl: isYml
          ? 'no-cache, no-store, must-revalidate'
          : 'public, max-age=31536000, immutable',
      },
    });
    // На uniform bucket-level access makePublic() ругается, поэтому полагаемся
    // на bucket-level IAM binding из ensurePublic(). Объект всё равно станет публичным.
    process.stdout.write('ok\n');
  }
}

(async () => {
  await ensurePublic();
  await uploadAll();
  console.log('');
  console.log('[upload] фид: https://storage.googleapis.com/' + BUCKET + '/' + REMOTE_PREFIX + '/latest.yml');
  console.log('[upload] клиенты обнаружат обновление при следующем старте (или раз в 30 минут)');
})().catch(e => {
  console.error('[upload] fatal:', e);
  process.exit(1);
});
