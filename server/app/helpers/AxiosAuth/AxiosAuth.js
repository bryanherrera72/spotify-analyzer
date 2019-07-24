var axios = require('axios');

function utoa(str) {
    let buffer = new Buffer.from(str);
    return buffer.toString('base64');
}
var axiosAuth = axios.create({
    baseURL: 'https://accounts.spotify.com/api',
    headers: {
        'Authorization': "Basic " + utoa("7a210937825642efad44b42d57c581be:2db747e89b5b4246ba2c949cd5aefcb8"),
    },
    params: {
        'grant_type': 'client_credentials',
    }
});

module.exports = axiosAuth;