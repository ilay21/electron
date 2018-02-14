const {ipcRenderer} = require('electron');

const sendMessage = (event, args) => {

    //todo - implement this module
    setTimeout(() => {
        ipcRenderer.send('close-message', 'random-message');
    }, 3000)
};

ipcRenderer.on('whatsapp-message', sendMessage);