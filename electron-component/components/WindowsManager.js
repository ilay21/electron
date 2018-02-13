const WindowsFactory = require('./WindowsFactory');


class WindowsManager {

    constructor() {
        this._windows = {};
    }

    addWindow(options, url, scriptUrl) {
        if (!this._windows[url]) {
            let win = WindowsFactory.createWindow(options, url, scriptUrl);
            this._windows[url] = win;
            return win;
        }
        else {
            return null;
        }

    }

    removeWindow(url) {
        if (this._windows[url]) this._windows[url].close();
        this._windows[url] = null;
    }

    getWindowByUrl(url) {
        return this._windows[url];
    }

}

module.exports = new WindowsManager();