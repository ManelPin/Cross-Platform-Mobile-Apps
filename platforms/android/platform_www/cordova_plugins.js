cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.virtuoworks.cordova-plugin-canvascamera.CanvasCamera",
    "file": "plugins/com.virtuoworks.cordova-plugin-canvascamera/www/CanvasCamera.js",
    "pluginId": "com.virtuoworks.cordova-plugin-canvascamera",
    "clobbers": [
      "plugin.CanvasCamera",
      "CanvasCamera"
    ]
  },
  {
    "id": "cordova-plugin-android-permissions.Permissions",
    "file": "plugins/cordova-plugin-android-permissions/www/permissions.js",
    "pluginId": "cordova-plugin-android-permissions",
    "clobbers": [
      "cordova.plugins.permissions"
    ]
  },
  {
    "id": "cordova-plugin-screensize.screensize",
    "file": "plugins/cordova-plugin-screensize/www/screensize.js",
    "pluginId": "cordova-plugin-screensize",
    "clobbers": [
      "window.plugins.screensize"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.virtuoworks.cordova-plugin-canvascamera": "1.1.5",
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-android-permissions": "1.0.0",
  "cordova-plugin-screensize": "1.3.1"
};
// BOTTOM OF METADATA
});