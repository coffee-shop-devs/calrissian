const express = require('express');
const app     = express();
const start   = function () {};

app.get('/?', function (req, res) {
  res.send('Hello World!');
});

app.listen(8081, function () {
  console.log('Listening');
});

module.exports = start;
