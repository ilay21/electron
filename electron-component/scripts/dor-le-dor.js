const {ipcRenderer} = require('electron');

const sendMessage = event => {

    //todo - un-comment the next line when we want validation on the origin.
    //if (event.origin !== "http://localhost:8080") return;
    ipcRenderer.send('asynchronous-message', event.data);
};

const replyHandler = (event, args) => {
    console.log(event, args)
};

ipcRenderer.on('asynchronous-reply', replyHandler);

window.addEventListener("message", sendMessage, false);
