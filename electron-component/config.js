module.exports = {
    defaultBrowserOptions: {
        width: 950,
        height: 720
    },
    urls: {
        //todo - change this to which url is relevant
        dorledor: 'http://localhost:8080',
        whatsapp: 'https://web.whatsapp.com'
    },
    script_paths: {
        dorledor: './scripts/dor-le-dor.js',
        whatsapp: './scripts/whatsapp.js'
    },
    msgs_names: {
        whatsapp: 'whatsapp-message'
    },
    error_messages: {
        unsupported: 'Unspported target for sending messages',
        already_exist: 'window with the same url already exist'
    }
};