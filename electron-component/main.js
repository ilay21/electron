const communicator = require('./services/communicator');
const windowsManager = require("./services/windows-manager");
const electron = require('electron');
const config = require('./config');
const app = electron.app;

function init() {
    setAppListeners();
    communicator.init();
}

function createMainWindow() {
    windowsManager.addWindow(
        config.defaultBrowserOptions,
        config.urls.dorledor,
        config.script_paths.dorledor);
}

function setAppListeners() {
    return app
        .on('ready', createMainWindow)
        .on('window-all-closed', function () {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        .on('activate', function () {
            if (windowsManager.getWindowByUrl(config.urls.dorledor) === null) {
                createMainWindow()
            }
        });
}

init();