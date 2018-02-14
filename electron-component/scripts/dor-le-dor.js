const {ipcRenderer} = require('electron');

const sendMessage = event => {
    if (event.origin !== "http://localhost:8080") return;
    //console.log("passed validation");
    ipcRenderer.send('asynchronous-message', event.data);
};

const replyHandler = (event, args) => {
    console.log(event, args)
};

ipcRenderer.on('asynchronous-reply', replyHandler);

window.addEventListener("message", sendMessage, false);
