const windowsFactory = require('./windows-factory');
const config = require('./../config');

let windows = {};

const addWindow = (options, url, scriptUrl) => {
    return new Promise((resolve, reject) => {
        if (!windows[url]) {
            windowsFactory.createWindow(options, url, scriptUrl)
                .then(win => {
                    windows[url] = win;
                    resolve(win);
                });
        }
        else {
            reject(config.error_messages.already_exist);
        }
    });
};

const removeWindow = (url) => {
    if (windows[url]) windows[url].close();
    windows[url] = null;
};

const getWindowByUrl = (url) => {
    return windows[url];
};

module.exports = {addWindow, removeWindow, getWindowByUrl};