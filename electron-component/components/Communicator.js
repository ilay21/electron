const conf = require('./../config');
const electron = require('electron');
const WindowsManager = require("./WindowsManager");

const {ipcMain} = electron;

class Communicator {

    constructor() {
        ipcMain.on('asynchronous-message', this.send);
        ipcMain.on('close-message', this.close);
    }

    send(e, msgObj) {
        switch (msgObj.platform) {
            case 'whatsapp':
                WindowsManager.addWindow(
                    conf.defaultBrowserOptions,
                    conf.urls.whatsapp,
                    conf.script_routs.whatsapp)
                    .then((win) => {
                        win.webContents
                            .send('whatsapp-message', msgObj);
                    });
                break;
        }
    }

    close(params) {
        //todo - WindowsManager.removeWindow
    }

}

module.exports = new Communicator();