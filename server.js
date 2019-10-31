const express = require('express');
const app     = express();
const port    = 8081;
const start   = function () {};

app.listen(port, start);

module.exports = start;

