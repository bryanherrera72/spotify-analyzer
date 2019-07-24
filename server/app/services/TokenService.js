let axiosAuth = require('../helpers/AxiosAuth/AxiosAuth');

exports.getToken = async function(){
    let result = await axiosAuth.post('/token');
    return result;
    
}