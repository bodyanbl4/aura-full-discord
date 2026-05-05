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

## Auto-update (Discord-style, через Firebase Hosting)

`electron-updater` настроен на `provider: generic` с фидом `https://aura-748c8.web.app/`.
GitHub Releases / GH_TOKEN не нужны: апдейты раздаёт Firebase Hosting того же
проекта, что и Firestore (`aura-748c8`).

### Один раз настроить (на машине разработчика)

1. `npm i -g firebase-tools`
2. `firebase login` (один раз, аккаунт-владелец проекта)
3. Убедись, что в Firebase Console включён Hosting для `aura-748c8`. Сайт по умолчанию — `aura-748c8.web.app`.

### Релиз новой версии

```bash
# 1. Бампни версию
npm version patch        # 0.0.1 -> 0.0.2

# 2. Собери .exe и задеплой апдейт-фид в Firebase Hosting
npm run release:win
```

Что делает `release:win`:

1. `npm run dist:win` → `electron-builder` собирает `release/Aura Discord Setup X.Y.Z.exe`,
   `release/latest.yml`, `release/*.blockmap`.
2. `npm run prepare-release` → `scripts/prepare-release.cjs` копирует артефакты в `release-public/`.
3. `firebase deploy --only hosting` → Firebase публикует `release-public/` на `aura-748c8.web.app`.

После этого все установленные клиенты при следующем старте (или раз в 30 минут)
проверят `https://aura-748c8.web.app/latest.yml`, обнаружат новую версию,
скачают `.exe` в фоне и тихо установят при выходе из приложения.

### Поведение клиента
- Скачивание идёт **в фоне**, без модалок.
- В правом нижнем углу показывается тонкая полоска прогресса.
- Когда скачано — кнопка «Перезапустить сейчас» (silent install + force run).
- Если пользователь крестиком закрыл полоску — апдейт всё равно установится
  при выходе из приложения (`autoInstallOnAppQuit`).

## Конфигурация Firebase

Firebase-настройки сейчас зашиты в `src/App.jsx`. Для production-проекта вынеси их в Vite env-переменные (`import.meta.env.VITE_FIREBASE_*`) и подключи через `.env` (см. `.env.example`).

## Безопасность (важно)

- **Пароли пользователей сейчас хранятся в Firestore в открытом виде.** Это разработческая заглушка — в production-проекте замени на Firebase Auth (Email/Password или OAuth), удали поле `password` из `aura_users_v3` и добавь Firestore Security Rules. См. [TODO в issues].
- Если ты настраивал Tauri auto-update (раньше в проекте была папка `~/.tauri/`), считай, что приватный ключ подписания скомпрометирован: сгенерируй новый ключ, если планируешь использовать Tauri отдельно.
- Если в репозиторий когда-либо попадал `LIVEKIT_API_SECRET` или Supabase-токен — ротируй их в облачной консоли. Они остаются в истории git даже после удаления.
