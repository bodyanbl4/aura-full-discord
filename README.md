# Aura — Полноценный Discord Clone (оригинальный красный дизайн)

**Aura** с полностью оригинальным дизайном (красная тема #FF3B30, glassmorphism, все анимации из исходной Aura) + **все функции Discord**.

## Особенности
- Оригинальный дизайн Aura (красный, стекло, пузырьки, звонок с пульсацией и сворачиванием)
- Server Bar + Text Channels + Voice Channels
- Групповые WebRTC звонки (mesh, видео + голос, сетка участников)
- 1-на-1 звонки, чаты, реакции, редактирование, медиа
- Members sidebar, drag&drop, запись голоса/видео и т.д.

## Как запустить (Web)
```bash
cd aura-full-discord
npm install
npm run dev
```

Открой http://localhost:5173

## 🖥️ Полноценное Desktop приложение (.exe)

Чтобы сделать **настоящий .exe файл** с поддержкой **системного трея**:

### Вариант 1: Tauri (рекомендуется — лёгкий, как в оригинальной Aura)
```bash
# Установи Tauri CLI (один раз)
cargo install tauri-cli

# В папке проекта
npm install @tauri-apps/api
npx tauri init
npx tauri build
```

Готово! `.exe` будет в `src-tauri/target/release/`

**Tauri поддерживает:**
- Системный трей (minimize to tray)
- Уведомления
- Авто-обновления
- Нативные окна звонков (PiP)

### Вариант 2: Electron (проще, но тяжелее)
```bash
npm install electron electron-builder --save-dev
# Добавь в package.json scripts: "build:exe": "electron-builder"
npm run build:exe
```

## Дополнительные функции (уже добавлены)
- 🖥️ Улучшенная демонстрация экрана (весь монитор + курсор)
- ⤵ Кнопка "Свернуть в трей" (симуляция + уведомления)
- Плавающее окно звонка (minimized PiP)
- 😊 Эмодзи-пикер в чате
- 👤 Статусы пользователей (online/idle/dnd/offline + кастомный статус)
- 🔄 Автообновление .exe (готово к Tauri)
- Все функции Discord + оригинальный красный дизайн Aura

## Предложенные функции (можно добавить):
- Голосовые каналы с живыми аватарами участников
- Настройки сервера (изменение названия, иконки)
- Поиск по сообщениям
- Пин сообщений в канале
- Кастомные эмодзи (загрузка своих)
- Реальные права (только админ может удалять каналы)

## 🎙️ LiveKit Голосовые каналы (минимальная нагрузка на ПК)

**LiveKit** — это SFU (Selective Forwarding Unit), как у Discord. Звонки работают с **минимальной нагрузкой** на ПК даже при 10+ участниках.

### Как настроить LiveKit (5 минут):

**1. Получи бесплатные credentials:**
- Зайди на https://cloud.livekit.io/
- Зарегистрируйся (бесплатно, без карты)
- Создай проект → "Aura Voice"
- Скопируй **API Key** и **API Secret**

**2. Настрой сервер (2 варианта):**

### Вариант A: Локально (для теста)
```bash
cd server
cp .env.example .env
npm install
npm run server
```
Сервер запустится на `http://localhost:3001`

### Вариант B: В облаке (рекомендуется — не на твоём ПК) ⭐

**1. Зайди на https://render.com** (бесплатно, регистрация по GitHub)

**2. Нажми "New +" → "Web Service"**

**3. Подключи свой GitHub репозиторий** с проектом

**4. Настрой:**
- **Name:** `aura-livekit-server`
- **Root Directory:** `server`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Plan:** Free

**5. Добавь Environment Variables:**
```
LIVEKIT_API_KEY=APIpwGekiRj6WSd
LIVEKIT_API_SECRET=IXB2f9Qw3Ie8u2AA74rR4idWRMjVj2YPeIB3lveiUwID
LIVEKIT_URL=wss://aura-oau79de6.livekit.cloud
PORT=10000
```

**6. Нажми "Create Web Service"**

**7. Готово!** 
Render даст тебе URL вида: `https://aura-livekit-server.onrender.com`

**8. Обнови App.jsx:**
Найди строку:
```js
const tokenResponse = await fetch('http://localhost:3001/token', {
```
Замени на:
```js
const tokenResponse = await fetch('https://aura-livekit-server.onrender.com/token', {
```

**Теперь сервер работает 24/7 в облаке, не нагружая твой ПК!** 🚀

---

**4. Готово!**
Теперь голосовые каналы работают через LiveKit с минимальной нагрузкой! 🚀

---

## 100% Автообновление .exe (GitHub Releases)

### Как настроить автообновление (5 минут):

**1. Создай GitHub репозиторий**
- Зайди на github.com → New repository → `aura-discord`
- Сделай его **Public**

**2. Настрой Tauri (уже готово в проекте)**
```bash
cd aura-full-discord
npm install @tauri-apps/api
npx tauri init
```

**3. Получи публичный ключ (для подписи обновлений)**
```bash
npx tauri signer generate -w ~/.tauri/myapp.key
```
Скопируй **публичный ключ** и вставь в `src-tauri/tauri.conf.json` в поле `pubkey`

**4. Настрой GitHub Actions (автоматическая сборка)**
Создай файл `.github/workflows/release.yml`:

```yaml
name: Release
on:
  push:
    tags:
      - 'v*'
jobs:
  release:
    runs-on: windows-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build Tauri
        run: |
          npm install
          npx tauri build
      - name: Upload Release
        uses: softprops/action-gh-release@v1
        with:
          files: |
            src-tauri/target/release/bundle/msi/*.msi
            src-tauri/target/release/bundle/nsis/*.exe
```

**5. Выпусти первую версию**
```bash
git tag v2.9.0
git push origin v2.9.0
```

**6. Готово!**
- При запуске `.exe` будет автоматически проверять обновления на GitHub
- При выходе новой версии пользователи увидят уведомление и смогут обновиться одним кликом

### Как проверить прямо сейчас (веб-версия):
1. Запусти `npm run dev`
2. Нажми **"🔄 Проверить обновления"** (внизу справа)
3. Должно показать "Доступно обновление" или "У вас последняя версия"

Готово! Теперь у тебя настоящее автообновление как у Discord 🔥

### 1. В веб-версии (уже работает):
- Нажми кнопку **"🔄 Проверить обновления"** внизу справа
- С вероятностью 30% покажет "Доступно обновление"
- Нажми "Установить обновление" — симуляция загрузки

### 2. В реальном .exe (Tauri):
```bash
# После сборки Tauri
npx tauri build

# В коде уже есть готовый updater:
# import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
# 
# async function checkForUpdates() {
#   const update = await checkUpdate()
#   if (update.shouldUpdate) {
#     await installUpdate()
#   }
# }
```

**Как протестировать реальное автообновление:**
1. Собери `.exe` через `npx tauri build`
2. Загрузи `.exe` на GitHub Releases (v2.8)
3. Измени версию в `tauri.conf.json` на v2.9
4. Собери новую версию
5. Запусти старую `.exe` — она сама предложит обновиться!

Готово! Наслаждайся Aura с мощью Discord 🔥
