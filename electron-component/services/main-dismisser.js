const windowsManager = require("./windows-manager");

const close = (event, origin) => {
    if (origin && windowsManager.getWindowByUrl(origin)) {
        windowsManager.removeWindow(origin);
    }
};

module.exports = {close};