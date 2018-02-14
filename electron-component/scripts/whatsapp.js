const {ipcRenderer} = require('electron');

//todo - implement sending and return the status for this message.
//todo - return Promise
const sendOneMessage = (message, group) => {
    return new Promise((resolve, reject) => {
        resolve({
            group,
            arrived: true
        });
    })
};

//todo - build and return a list of all group names
const buildListFromArgs = args => {
    return ['group1'];
};

//todo - complete this
const getMessageFromArgs = args => {
    return 'hi dor le dor :)'
};

const sendMessage = (event, args) => {
    const message = getMessageFromArgs(args);
    let responses = buildListFromArgs(args)
        .map(group => sendOneMessage(message, group));
    Promise.all(responses).then((responseValues) => {
        ipcRenderer.send('asynchronous-reply', responseValues);
        ipcRenderer.send('close-message', 'https://web.whatsapp.com');
    });
};

ipcRenderer.on('whatsapp-message', sendMessage);