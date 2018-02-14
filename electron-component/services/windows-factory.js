const electron = require('electron');
const fs = require('fs');
const {BrowserWindow} = electron;

const createWindow = (options, url, scriptPath) => {
    return new Promise((resolve, reject) => {
        let win = new BrowserWindow(options);
        win.loadURL(url);
        win.webContents.openDevTools();
        win.webContents.on('did-finish-load', () =>
            fs.readFile(scriptPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                win.webContents.executeJavaScript(data.toString())
                    .then(() => resolve(win), reject)
            }))
    });
};

module.exports = {createWindow};