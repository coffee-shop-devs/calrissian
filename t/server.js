const func    = require('../server.js');
const express = require('express');
const app     = express();
const port    = 8081;

console.log(func);
var http = require('http'),
  options = {method: 'HEAD', host: 'localhost', port: 8081, path: '/'},
  req = http.request(options, function(r) {
    console.log(JSON.stringify(r.headers));
});
req.end();
