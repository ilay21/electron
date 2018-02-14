const config = require('./../config');
const {ipcMain} = require('electron');
const whatsappMessageSender = require("./whatsapp-message-sender");

const send = (event, messageObject) => {
    switch (messageObject.platform) {
        case 'whatsapp':
            whatsappMessageSender.send(messageObject);
            break;
        default:
            throw config.error_messages.unsupported;
            break;
    }
};

const close = (event, args) => {
    //todo - WindowsManager.removeWindow
};

const init = () => {
    ipcMain.on('asynchronous-message', send);
    ipcMain.on('close-message', close);
};

module.exports = {init, send, close};