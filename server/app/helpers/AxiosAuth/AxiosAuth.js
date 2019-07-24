var config = require('../../config/config');
var axios = require('axios');

function utoa(str) {
    let buffer = new Buffer.from(str);
    return buffer.toString('base64');
}
var axiosAuth = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
    headers: {
        'Authorization': "Basic " + utoa(config.KEY + ":"+ config.SECRET),
    },
    params: {
        'grant_type': 'client_credentials',
    }
});

module.exports = axiosAuth;