const communicator = require('./services/communicator');
const windowsManager = require("./services/windows-manager");
const electron = require('electron');
const conf = require('./config');
const app = electron.app;

function init() {
    setAppListeners();
    communicator.init();
}

function createMainWindow() {
    windowsManager.addWindow(
        conf.defaultBrowserOptions,
        conf.urls.dorledor,
        conf.script_paths.dorledor);
}

function setAppListeners() {
    app
        .on('ready', createMainWindow)
        .on('window-all-closed', function () {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        })
        .on('activate', function () {
            if (windowsManager.getWindowByUrl(conf.urls.dorledor) === null) {
                createMainWindow()
            }
        });
}

init();

