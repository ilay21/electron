const windowsFactory = require('./windows-factory');

let windows = {};

const addWindow = (options, url, scriptUrl) => {
    if (!windows[url]) {
        let win = windowsFactory.createWindow(options, url, scriptUrl);
        windows[url] = win;
        return win;
    }
    else {
        return null;
    }
};

const removeWindow = (url) => {
    if (windows[url]) windows[url].close();
    windows[url] = null;
};

const getWindowByUrl = (url) => {
    return windows[url];
};

module.exports = {addWindow, removeWindow, getWindowByUrl};