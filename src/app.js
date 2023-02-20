const express   = require('express');
const bp        = require("body-parser");
const db        = require('./configs/db.config');
const dogs      = require('./router/dog.router');
const PORT      = process.env.PORT || 5000

const Http      = require('http')
const App       = express()
const Server    = Http.createServer(App).listen(PORT);

App
  .all('*', function(input, output, next) {
    output.header("Access-Control-Allow-Origin", "*");
    output.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    output.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type, Accept');
    output.header('Access-Control-Allow-Headers', 'Content-Type, multipart/form-data');
    output.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    output.header('Access-Control-Allow-Credentials', true);
    next();
  })
  .use(bp.urlencoded({ extended: true }))
  .use(bp.json())
  .use('/', dogs);