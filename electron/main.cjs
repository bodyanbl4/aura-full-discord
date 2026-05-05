const { app, BrowserWindow, shell, ipcMain, Menu, Notification, desktopCapturer, dialog } = require('electron');
const path = require('node:path');
const { registerPermissionHandlers } = require('./permissions.cjs');
const { createTray, destroyTray } = require('./tray.cjs');
const { initAutoUpdater, installUpdateNow } = require('./updater.cjs');

// Не валим main-процесс на TypeError-ах из Chromium при отмене getDisplayMedia.
process.on('uncaughtException', (err) => {
  console.error('[main] uncaughtException:', err);
});
process.on('unhandledRejection', (err) => {
  console.error('[main] unhandledRejection:', err);
});

const isDev = !app.isPackaged;
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173';

let mainWindow = null;
let isQuitting = false;

// Состояние пикера демонстрации экрана: одна "висящая" заявка за раз.
let pendingDisplayMediaRequest = null;

function setupDisplayMediaHandler(win) {
  const ses = win.webContents.session;

  ses.setDisplayMediaRequestHandler(async (_request, callback) => {
    try {
      const sources = await desktopCapturer.getSources({
        types: ['screen', 'window'],
        thumbnailSize: { width: 320, height: 180 },
        fetchWindowIcons: false,
      });
      if (!sources.length) {
        try { callback({}); } catch (e) {}
        return;
      }
      // Если уже есть незакрытая заявка — отменяем её, чтобы не зависнуть.
      if (pendingDisplayMediaRequest) {
        try { pendingDisplayMediaRequest.callback({}); } catch (e) {}
        pendingDisplayMediaRequest = null;
      }
      pendingDisplayMediaRequest = {
        callback,
        sources,
        timeout: setTimeout(() => {
          if (pendingDisplayMediaRequest && pendingDisplayMediaRequest.callback === callback) {
            pendingDisplayMediaRequest = null;
            try { callback({}); } catch (e) {}
          }
        }, 120000),
      };
      win.webContents.send('aura:show-screen-picker', sources.map(s => ({
        id: s.id,
        name: s.name,
        thumbnail: s.thumbnail.toDataURL(),
      })));
    } catch (e) {
      console.error('display-media handler error:', e);
      try { callback({}); } catch (e2) {}
    }
  }, { useSystemPicker: false });
}

function safeCallback(callback, payload) {
  // В Electron 30+ callback({}) кидает TypeError "Video was requested..." при отмене.
  // Оборачиваем в try/catch, чтобы main-процесс не падал.
  try {
    callback(payload);
  } catch (err) {
    console.warn('[display-media] callback threw:', err && err.message);
  }
}

ipcMain.on('aura:screen-picker-result', (_event, sourceId) => {
  if (!pendingDisplayMediaRequest) return;
  const { callback, sources, timeout } = pendingDisplayMediaRequest;
  pendingDisplayMediaRequest = null;
  if (timeout) clearTimeout(timeout);

  if (!sourceId) {
    safeCallback(callback, {});
    return;
  }
  const picked = sources.find(s => s.id === sourceId);
  if (!picked) {
    safeCallback(callback, {});
    return;
  }
  // audio: 'loopback' — захват системного звука Windows. На macOS Electron вернёт null,
  // что приведёт к падению getDisplayMedia, поэтому включаем только на Windows.
  const includeLoopback = process.platform === 'win32' && picked.id.startsWith('screen:');
  safeCallback(callback, includeLoopback ? { video: picked, audio: 'loopback' } : { video: picked });
});

function createMainWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    title: 'Aura Discord',
    backgroundColor: '#0A0A0C',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  Menu.setApplicationMenu(null);

  registerPermissionHandlers(mainWindow.webContents.session);
  setupDisplayMediaHandler(mainWindow);

  if (isDev) {
    mainWindow.loadURL(VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, '..', 'dist', 'index.html'));
  }

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.on('close', (event) => {
    if (!isQuitting) {
      event.preventDefault();
      mainWindow.hide();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  return mainWindow;
}

function getMainWindow() {
  return mainWindow;
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (!mainWindow) return;
    if (mainWindow.isMinimized()) mainWindow.restore();
    if (!mainWindow.isVisible()) mainWindow.show();
    mainWindow.focus();
  });

  app.whenReady().then(() => {
    createMainWindow();
    createTray({ getMainWindow, onQuit: () => { isQuitting = true; app.quit(); } });
    initAutoUpdater(getMainWindow);

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
      else if (mainWindow && !mainWindow.isVisible()) mainWindow.show();
    });
  });

  app.on('before-quit', () => {
    isQuitting = true;
    destroyTray();
  });

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      isQuitting = true;
      app.quit();
    }
  });
}

ipcMain.handle('aura:show-notification', (_event, { title, body, silent } = {}) => {
  if (!Notification.isSupported()) return false;
  const n = new Notification({ title: String(title || 'Aura'), body: String(body || ''), silent: !!silent });
  n.on('click', () => {
    if (!mainWindow) return;
    if (!mainWindow.isVisible()) mainWindow.show();
    mainWindow.focus();
  });
  n.show();
  return true;
});

ipcMain.handle('aura:get-version', () => app.getVersion());

ipcMain.handle('aura:minimize-to-tray', () => {
  if (!mainWindow) return false;
  mainWindow.hide();
  return true;
});

ipcMain.handle('aura:open-external', (_event, url) => {
  if (typeof url !== 'string') return false;
  if (!/^https?:\/\//.test(url)) return false;
  shell.openExternal(url);
  return true;
});

ipcMain.handle('aura:install-update', () => {
  if (typeof installUpdateNow === 'function') {
    installUpdateNow();
    return true;
  }
  return false;
});
