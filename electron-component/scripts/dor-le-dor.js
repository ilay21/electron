const {ipcRenderer} = require('electron');

const sendMessage = (event) => {
    if (event.origin !== "http://localhost:8080") return;
    //console.log("passed validation");
    ipcRenderer.send('asynchronous-message', event.data);
};

window.addEventListener("message", sendMessage, false);
