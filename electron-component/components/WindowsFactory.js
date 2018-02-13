const electron = require('electron');
const fs = require('fs');

const {BrowserWindow} = electron;

class WindowsFactory {

    constructor() {
    }

    /**
     *
     * @param options
     * @param url
     * @param scriptUrl
     * @param placeholders in the structure of: {<placeholder_name>: <string_to_put_instead_of_placeholder>, ...}
     * @param keepAlive
     */
    createWindow(options, url, scriptUrl) {
        return new Promise(function (resolve, reject) {
            let win = new BrowserWindow(options);
            win.loadURL(url);
            win.webContents.openDevTools();
            win.webContents.on('did-finish-load', () => {
                fs.readFile(scriptUrl, function (err, data) {
                    if (err) {
                        reject(err);
                    }

                    win.webContents.executeJavaScript(data.toString())
                        .then(function () {
                            resolve(win);
                        }, reject)
                });
            });
        });

    }
}

module
    .exports = new WindowsFactory();