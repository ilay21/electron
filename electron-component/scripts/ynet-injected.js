const {ipcRenderer} = require('electron');


function receiveMessage(event) {
    //let topStoryText = document.getElementsByClassName("top-story-text")[0];
    ipcRenderer.send('asynchronous-message', "lalalalalala");
}


window.addEventListener("message", receiveMessage, false);



