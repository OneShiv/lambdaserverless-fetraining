const http = require('serverless-http');
module.exports.handler = http(require('./src/api/api'));