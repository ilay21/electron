const WindowsManager = require("./components/WindowsManager");

const electron = require('electron');
const conf = require('./config');

// Module to control application life.
const app = electron.app;

function initializeCommunicator() {
    //the way to init the communicator instance:
    require('./components/Communicator');
}

function createWindows() {
    WindowsManager.addWindow(
        conf.defaultBrowserOptions,
        conf.urls.dorledor,
        conf.script_routs.dorledor);

    initializeCommunicator();
}

app.on('ready', createWindows);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (WindowsManager.getWindowByUrl(conf.urls.dorledor) === null) {
        createWindows()
    }
});
