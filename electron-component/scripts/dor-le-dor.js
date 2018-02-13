const {ipcRenderer} = require('electron');


function sendMessage(event) {
    //let topStoryText = document.getElementsByClassName("top-story-text")[0];
    ipcRenderer.send('asynchronous-message', event.data);
}

window.addEventListener("message", sendMessage, false);
