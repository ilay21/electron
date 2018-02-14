const config = require('./../config');
const windowsManager = require("./windows-manager");

const send = (messageObject) =>
    windowsManager.addWindow(
        config.defaultBrowserOptions,
        config.urls.whatsapp,
        config.script_paths.whatsapp)
    .then((win) => win.webContents
        .send(config.msgs_names.whatsapp, messageObject));

module.exports = { send };