var express = require('express');
var TokenController = require('../controllers/TokenController');

var tokenRoutes = function(app){
    var router = express.Router();

    router.route('/accesstoken')
        .post(TokenController.retrieveAccessToken);
    return router;
}

module.exports = tokenRoutes;