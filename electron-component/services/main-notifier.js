const config = require('./../config');
const windowsManager = require("./windows-manager");

const notify = (event, messageObject) => {
    console.log('notifier: ', messageObject);
    //todo - understand who is the notifier and what is the target
    windowsManager.getWindowByUrl(config.urls.dorledor)
        .webContents.send('asynchronous-reply', messageObject);
};

module.exports = {notify};