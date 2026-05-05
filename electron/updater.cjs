const { app } = require('electron');

let cachedAutoUpdater = null;

function safeRequireUpdater() {
  try {
    return require('electron-updater');
  } catch (err) {
    console.warn('[updater] electron-updater is not installed:', err.message);
    return null;
  }
}

function send(getMainWindow, payload) {
  const win = getMainWindow && getMainWindow();
  if (win && !win.isDestroyed()) {
    win.webContents.send('aura:update-event', payload);
  }
}

function initAutoUpdater(getMainWindow) {
  if (!app.isPackaged) {
    console.log('[updater] dev mode — auto-update disabled');
    return;
  }

  const mod = safeRequireUpdater();
  if (!mod || !mod.autoUpdater) return;

  const { autoUpdater } = mod;
  cachedAutoUpdater = autoUpdater;
  // Фоновое скачивание без диалогов. quitAndInstall сам вызовется при выходе из приложения.
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on('checking-for-update', () => send(getMainWindow, { type: 'checking' }));
  autoUpdater.on('update-available', (info) => send(getMainWindow, { type: 'available', info }));
  autoUpdater.on('update-not-available', (info) => send(getMainWindow, { type: 'not-available', info }));
  autoUpdater.on('error', (err) => send(getMainWindow, { type: 'error', message: String(err && err.message || err) }));
  autoUpdater.on('download-progress', (progress) => send(getMainWindow, { type: 'progress', progress }));
  autoUpdater.on('update-downloaded', (info) => send(getMainWindow, { type: 'downloaded', info }));

  // checkForUpdates (без AndNotify) — мы сами рисуем баннер в renderer'е, не нужно ОС-нотификаций.
  autoUpdater.checkForUpdates().catch((err) => {
    console.warn('[updater] initial check failed:', err && err.message);
  });

  setInterval(() => {
    autoUpdater.checkForUpdates().catch(() => {});
  }, 30 * 60 * 1000);
}

function installUpdateNow() {
  if (!cachedAutoUpdater) return;
  // (isSilent=true, isForceRunAfter=true) — тихая установка и запуск приложения сразу после.
  try {
    cachedAutoUpdater.quitAndInstall(true, true);
  } catch (err) {
    console.warn('[updater] quitAndInstall failed:', err && err.message);
  }
}

function checkForUpdatesManual() {
  if (!cachedAutoUpdater) return;
  cachedAutoUpdater.checkForUpdates().catch((err) => {
    console.warn('[updater] manual check failed:', err && err.message);
  });
}

module.exports = { initAutoUpdater, installUpdateNow, checkForUpdatesManual };
