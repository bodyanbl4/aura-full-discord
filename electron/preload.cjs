const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('aura', {
  isElectron: true,
  platform: process.platform,
  getVersion: () => ipcRenderer.invoke('aura:get-version'),
  showNotification: (payload) => ipcRenderer.invoke('aura:show-notification', payload),
  minimizeToTray: () => ipcRenderer.invoke('aura:minimize-to-tray'),
  openExternal: (url) => ipcRenderer.invoke('aura:open-external', url),
  onUpdateEvent: (handler) => {
    if (typeof handler !== 'function') return () => {};
    const listener = (_event, payload) => handler(payload);
    ipcRenderer.on('aura:update-event', listener);
    return () => ipcRenderer.removeListener('aura:update-event', listener);
  },
  installUpdate: () => ipcRenderer.invoke('aura:install-update'),
  checkForUpdates: () => ipcRenderer.invoke('aura:check-for-updates'),
  // Screen-share picker bridge
  onScreenPickerRequest: (handler) => {
    if (typeof handler !== 'function') return () => {};
    const listener = (_event, sources) => handler(sources);
    ipcRenderer.on('aura:show-screen-picker', listener);
    return () => ipcRenderer.removeListener('aura:show-screen-picker', listener);
  },
  resolveScreenPicker: (sourceId) => ipcRenderer.send('aura:screen-picker-result', sourceId || null),
});
