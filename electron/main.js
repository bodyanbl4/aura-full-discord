const { app, BrowserWindow, shell, ipcMain, Menu, Notification } = require('electron');
const path = require('node:path');
const { registerPermissionHandlers } = require('./permissions');
const { createTray, destroyTray } = require('./tray');
const { initAutoUpdater } = require('./updater');

const isDev = !app.isPackaged;
const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL || 'http://localhost:5173';

let mainWindow = null;
let isQuitting = false;

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
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      webSecurity: true,
    },
  });

  Menu.setApplicationMenu(null);

  registerPermissionHandlers(mainWindow.webContents.session);

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
