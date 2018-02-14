module.exports = {
    defaultBrowserOptions: {
        width: 950,
        height: 720
    },
    urls: {
        //todo - change this to which url is relevant
        dorledor: 'http://localhost:8080',
        whatsapp: 'http://www.geektime.co.il' //'https://web.whatsapp.com'
    },
    script_paths: {
        dorledor: './scripts/dor-le-dor.js',
        whatsapp: './scripts/whatsapp.js'
    },
    msgs_names: {
        whatsapp: 'whatsapp-message'
    },
    error_messages: {
        unsupported: 'Unspported target for sending messages'
    }
};