'use strict';

test();

function startServer() {
  console.log("starting up");
  var proc = require('child_process').spawn('node', ['../server.js'], {
    detached: true,
    stdio:    'inherit',
  });
  proc.kill();
};

function test() {
  startServer();
  const request = require('request');
  request('http://0.0.0.0:8081', { json: true }, (err, res, body) => {
  if (err) console.log(err);
  });
}
