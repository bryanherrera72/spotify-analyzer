var config = {
    VERSION: 1, 
    BUILD: 1, 
    URL: 'http://127.0.0.1', 
    API_PATH: '/token', 
    PORT : process.env.PORT || 5000,
    CORS_OPTIONS: { 
        origin: 'http://localhost:3000', 
        optionsSuccessStatus: 200
    }
}

module.exports = config;