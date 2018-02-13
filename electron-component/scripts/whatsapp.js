const {ipcRenderer} = require('electron');


function sendMessage(event, args) {
    console.log(event, args);
    //ipcRenderer.send('asynchronous-message', event.data);
}

ipcRenderer.on('whatsapp-message', sendMessage);


