#!/usr/bin/env node
/* eslint-disable no-console */
// Копирует артефакты electron-builder в release-public/ — то, что
// разворачивает Firebase Hosting. На выходе: latest.yml + *.exe + *.blockmap
// в плоской структуре в корне публичного бакета. electron-updater читает
// latest.yml относительно URL из публикации и скачивает .exe.

const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const releaseDir = path.join(root, 'release');
const publicDir = path.join(root, 'release-public');

if (!fs.existsSync(releaseDir)) {
  console.error('[release] папка release/ не найдена. Сначала запусти `npm run dist:win` (или dist:mac / dist:linux).');
  process.exit(1);
}

fs.rmSync(publicDir, { recursive: true, force: true });
fs.mkdirSync(publicDir, { recursive: true });

// Берём только публикуемые артефакты, чтобы не залить в Hosting случайные unpacked-папки.
const allowedExt = new Set(['.exe', '.yml', '.blockmap', '.dmg', '.zip', '.AppImage', '.deb', '.rpm', '.tar.gz']);

function shouldCopy(name) {
  const lower = name.toLowerCase();
  for (const ext of allowedExt) {
    if (lower.endsWith(ext.toLowerCase())) return true;
  }
  return false;
}

let copied = 0;
for (const entry of fs.readdirSync(releaseDir, { withFileTypes: true })) {
  if (!entry.isFile()) continue;
  if (!shouldCopy(entry.name)) continue;
  const src = path.join(releaseDir, entry.name);
  const dest = path.join(publicDir, entry.name);
  fs.copyFileSync(src, dest);
  console.log('[release] copied', entry.name);
  copied++;
}

if (copied === 0) {
  console.error('[release] не нашли ни одного артефакта для публикации');
  process.exit(1);
}

console.log(`[release] готово, ${copied} файл(ов) в release-public/`);
console.log('[release] следующий шаг: firebase deploy --only hosting');
