const express = require('express');
var cors = require('cors');

var tokenRoutes = require('./app/routes/TokenRoutes');
const config = require('./app/config/config');

const app = express();
app.use(cors(config.CORS_OPTIONS));
app.use(config.API_PATH, tokenRoutes());
// Make the app listen on port 3000
app.listen(config.PORT);
console.log('Server listening on http://localhost:' + config.PORT);