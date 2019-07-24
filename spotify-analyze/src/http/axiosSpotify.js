import axios from 'axios';

const axiosSpotify = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
});

export default axiosSpotify;