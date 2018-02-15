const {ipcMain} = require('electron');
const mainSender = require("./main-sender");
const mainNotifier = require("./main-notifier");
const mainDismisser = require("./main-dismisser");

const init = () => {
    ipcMain.on('asynchronous-message', mainSender.send);
    ipcMain.on('asynchronous-reply', mainNotifier.notify);
    ipcMain.on('close-message', mainDismisser.close);
};

module.exports = {init};