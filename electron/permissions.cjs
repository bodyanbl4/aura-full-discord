const { systemPreferences } = require('electron');

const ALLOWED_PERMISSIONS = new Set([
  'media',
  'mediaKeySystem',
  'display-capture',
  'notifications',
  'clipboard-read',
  'clipboard-sanitized-write',
]);

function registerPermissionHandlers(session) {
  if (!session) return;

  session.setPermissionRequestHandler((_webContents, permission, callback) => {
    callback(ALLOWED_PERMISSIONS.has(permission));
  });

  session.setPermissionCheckHandler((_webContents, permission) => {
    return ALLOWED_PERMISSIONS.has(permission);
  });

  if (process.platform === 'darwin' && systemPreferences && systemPreferences.askForMediaAccess) {
    systemPreferences.askForMediaAccess('microphone').catch(() => {});
    systemPreferences.askForMediaAccess('camera').catch(() => {});
  }
}

module.exports = { registerPermissionHandlers };
