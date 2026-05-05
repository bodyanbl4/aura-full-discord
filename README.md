# Aura — Discord-подобный мессенджер

React + Vite фронтенд + Firebase (Firestore/Auth/Storage) + WebRTC P2P + Electron-обёртка для desktop-сборки (.exe / .dmg / AppImage).

## Возможности

- Server Bar + текстовые и голосовые каналы
- Групповые голосовые каналы через **WebRTC P2P (mesh)** + сигналинг через Firestore
- 1-на-1 звонки (видео и голос), чаты, реакции, редактирование, медиа
- Members sidebar, drag&drop, запись голоса/видео
- Демонстрация экрана через `getDisplayMedia`

## Стек

| Слой | Технология |
|---|---|
| UI | React 18 + Vite + lucide-react |
| Backend / БД | Firebase Firestore + Firebase Auth (anonymous) |
| Файлы | Firebase Storage / Supabase Storage |
| Голос/видео | WebRTC P2P (mesh) с STUN/TURN, сигналинг через Firestore |
| Desktop | Electron 32 + electron-builder + electron-updater |

## Запуск (web, dev)

```bash
npm install
npm run dev
```

Откроется `http://localhost:5173`.

## Запуск (Electron, dev)

```bash
npm install
npm run dev:electron
```

Скрипт поднимает Vite на `:5173` и Electron, который грузит dev-сервер. Hot reload работает.

## Сборка production

### Web

```bash
npm run build
# результат в dist/
npm run preview   # локальная проверка собранного билда
```

### Desktop

```bash
# .exe / .dmg / AppImage в зависимости от ОС
npm run dist

# Только Windows
npm run dist:win

# Без installer — для быстрой проверки
npm run pack
```

Артефакты появятся в `release/`.

> На Windows без подписи (code signing) SmartScreen покажет «Неизвестный издатель». Это ожидаемо. Чтобы убрать — нужен Code Signing-сертификат, см. [docs.electron-builder](https://www.electron.build/code-signing).

## Структура проекта

```
.
├── electron/             # код desktop-обёртки
│   ├── main.js           # главный процесс: окно, IPC, lifecycle
│   ├── preload.js        # contextBridge, безопасный мост в renderer
│   ├── permissions.js    # разрешения для микрофона / экрана / уведомлений
│   ├── tray.js           # системный трей
│   └── updater.js        # auto-update через electron-updater
├── src/                  # React-приложение
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── build/                # ресурсы для electron-builder (icon.ico, icon.icns, icon.png)
├── index.html
├── package.json
└── vite.config.js
```

Иконки для desktop-сборки положи в `build/`:

- `build/icon.ico` (Windows, 256×256)
- `build/icon.icns` (macOS)
- `build/icon.png` (Linux, 512×512)

Если этих файлов нет, electron-builder соберёт пакет без иконки приложения и трея.

## Auto-update (Discord-style, через Firebase Storage)

`electron-updater` настроен на `provider: generic` с фидом
`https://storage.googleapis.com/aura-748c8.firebasestorage.app/updates/`.
GitHub Releases / GH_TOKEN не нужны: апдейты раздаёт Firebase Storage того же
проекта, что и Firestore (`aura-748c8`). Бесплатный план Spark поддерживает
.exe (в отличие от Hosting).

### Один раз настроить

1. **Получить service account JSON.**
   - Открой https://console.firebase.google.com/project/aura-748c8/settings/serviceaccounts/adminsdk
   - Generate new private key → скачается JSON.
   - Положи его как `serviceAccount.json` в **корень репозитория**
     (`.gitignore` уже его игнорирует, в коммит не уйдёт).
   - Альтернатива: переменная окружения `FIREBASE_SERVICE_ACCOUNT` с абсолютным путём.

2. **Установить deps** (если ещё не сделано):
   ```bash
   npm install
   ```
   Это установит `firebase-admin` для скрипта upload.

3. **Сделать бакет публично читаемым** (один раз).
   Скрипт `scripts/upload-storage.cjs` пытается выставить IAM-биндинг автоматически
   при первом запуске. Если у service account нет прав `Storage Admin` — сделай
   вручную:
   - Cloud Console → Storage → bucket `aura-748c8.firebasestorage.app` → Permissions →
     ADD principal → `allUsers`, role `Storage Object Viewer`.
   - Либо: `gsutil iam ch allUsers:objectViewer gs://aura-748c8.firebasestorage.app`.

### Релиз новой версии

```bash
npm version patch        # 0.0.1 -> 0.0.2
npm run release:win
```

Что делает `release:win`:

1. `electron-builder --win` соберёт `release/Aura Discord Setup X.Y.Z.exe`
   + `release/latest.yml` + `release/*.blockmap`.
2. `node scripts/upload-storage.cjs` через Firebase Admin SDK заливает их
   в `gs://aura-748c8.firebasestorage.app/updates/`.
3. После заливки они доступны по
   `https://storage.googleapis.com/aura-748c8.firebasestorage.app/updates/<file>`
   без авторизации.

После этого все установленные клиенты при следующем старте (или раз в 30 минут)
проверят `…/updates/latest.yml`, обнаружат новую версию, скачают `.exe`
в фоне и тихо установят при выходе из приложения. **Никаких** GitHub-токенов,
ручной публикации и `firebase deploy`.

### Поведение клиента
- Скачивание идёт в фоне, без модалок.
- В правом нижнем углу — тонкая полоска прогресса.
- Когда скачано — кнопка «Перезапустить сейчас» (silent install + force run).
- Если крестиком закрыл полоску — апдейт всё равно установится при выходе
  из приложения (`autoInstallOnAppQuit`).

## Конфигурация Firebase

Firebase-настройки сейчас зашиты в `src/App.jsx`. Для production-проекта вынеси их в Vite env-переменные (`import.meta.env.VITE_FIREBASE_*`) и подключи через `.env` (см. `.env.example`).

## Безопасность (важно)

- **Пароли пользователей сейчас хранятся в Firestore в открытом виде.** Это разработческая заглушка — в production-проекте замени на Firebase Auth (Email/Password или OAuth), удали поле `password` из `aura_users_v3` и добавь Firestore Security Rules. См. [TODO в issues].
- Если ты настраивал Tauri auto-update (раньше в проекте была папка `~/.tauri/`), считай, что приватный ключ подписания скомпрометирован: сгенерируй новый ключ, если планируешь использовать Tauri отдельно.
- Если в репозиторий когда-либо попадал `LIVEKIT_API_SECRET` или Supabase-токен — ротируй их в облачной консоли. Они остаются в истории git даже после удаления.
