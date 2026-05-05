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

## Auto-update

Используется `electron-updater` с провайдером **GitHub Releases**. Подробнее: [electron.build/auto-update](https://www.electron.build/auto-update).

Чтобы релиз был доступен:

1. Создай git-тег вида `v1.2.3`.
2. CI (или локально) собирает артефакты `npm run dist` и публикует их в GitHub Releases — electron-builder может это сделать сам, если задана переменная окружения `GH_TOKEN`.
3. Установленные клиенты получат уведомление об обновлении и скачают его в фоне.

## Конфигурация Firebase

Firebase-настройки сейчас зашиты в `src/App.jsx`. Для production-проекта вынеси их в Vite env-переменные (`import.meta.env.VITE_FIREBASE_*`) и подключи через `.env` (см. `.env.example`).

## Безопасность (важно)

- **Пароли пользователей сейчас хранятся в Firestore в открытом виде.** Это разработческая заглушка — в production-проекте замени на Firebase Auth (Email/Password или OAuth), удали поле `password` из `aura_users_v3` и добавь Firestore Security Rules. См. [TODO в issues].
- Если ты настраивал Tauri auto-update (раньше в проекте была папка `~/.tauri/`), считай, что приватный ключ подписания скомпрометирован: сгенерируй новый ключ, если планируешь использовать Tauri отдельно.
- Если в репозиторий когда-либо попадал `LIVEKIT_API_SECRET` или Supabase-токен — ротируй их в облачной консоли. Они остаются в истории git даже после удаления.
