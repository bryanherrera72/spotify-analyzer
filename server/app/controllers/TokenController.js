var TokenService = require('../services/TokenService');

var TokenController = {
    setAccessToken: function(req, res, next){
        console.log("route works");
        next();
    },
    retrieveAccessToken: function(req, res, next){
        TokenService.getToken().then(
            response => {
                res.json(response.data);
            }
        ).catch(
            err=>{
                console.log(err);
                next();
            }
            
        );
    },
    helloWorld: function(req, res, next){
        res.json("Hello Worl");
        next();
    }
}

module.exports = TokenController;