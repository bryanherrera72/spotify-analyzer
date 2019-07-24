var config = {
    VERSION: 1, 
    BUILD: 1, 
    URL: 'http://127.0.0.1', 
    API_PATH: '/token', 
    PORT : process.env.PORT || 5000,
    CORS_OPTIONS: { 
        origin: 'http://localhost:3000', 
        optionsSuccessStatus: 200
    },
    KEY: '7a210937825642efad44b42d57c581be',
    SECRET: '2db747e89b5b4246ba2c949cd5aefcb8',
}

module.exports = config;