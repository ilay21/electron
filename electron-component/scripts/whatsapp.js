const {ipcRenderer} = require('electron');


const sendMessage = (event, args) => {
    console.log(event, args);

    var a = {
        prop: "value"
    };

    setTimeout(() => {
        ipcRenderer.send('close-message', a);
    }, 3000)
    //ipcRenderer.send('asynchronous-message', event.data);
};

ipcRenderer.on('whatsapp-message', sendMessage);


