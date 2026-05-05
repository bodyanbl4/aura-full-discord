const { Tray, Menu, nativeImage, app } = require('electron');
const path = require('node:path');
const fs = require('node:fs');

let tray = null;

function resolveTrayIcon() {
  const candidates = [
    path.join(__dirname, '..', 'build', 'icons', 'tray.png'),
    path.join(__dirname, '..', 'build', 'icon.png'),
    path.join(__dirname, '..', 'public', 'icon.png'),
  ];
  for (const p of candidates) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function createTray({ getMainWindow, onQuit }) {
  const iconPath = resolveTrayIcon();
  let image;
  if (iconPath) {
    image = nativeImage.createFromPath(iconPath);
    if (!image.isEmpty()) {
      image = image.resize({ width: 16, height: 16 });
    }
  }
  if (!image || image.isEmpty()) {
    image = nativeImage.createEmpty();
  }

  tray = new Tray(image);
  tray.setToolTip('Aura Discord');

  const showWindow = () => {
    const win = getMainWindow();
    if (!win) return;
    if (win.isMinimized()) win.restore();
    win.show();
    win.focus();
  };

  const menu = Menu.buildFromTemplate([
    { label: 'Открыть Aura', click: showWindow },
    { type: 'separator' },
    { label: `Версия ${app.getVersion()}`, enabled: false },
    { type: 'separator' },
    { label: 'Выход', click: () => onQuit && onQuit() },
  ]);

  tray.setContextMenu(menu);
  tray.on('click', showWindow);
  tray.on('double-click', showWindow);

  return tray;
}

function destroyTray() {
  if (tray) {
    tray.destroy();
    tray = null;
  }
}

module.exports = { createTray, destroyTray };
