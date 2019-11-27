'use strict';

var server;

tear_down(set_up());

function set_up() {
  return require('child_process').spawn('node', ['server.js'], { detached: true, stdio: 'inherit' });
};

function tear_down($server) {
  
  console.log("tearing down");
  server.kill();
}

function test(server) {
  const http = require('http');
  const req  = http.request({
    host:   '0.0.0.0',
    port:   8081,
    method: 'GET'
    }, (res) => {
    res.resume();
    res.on('end', () => {
      if (!res.complete) console.error('The connection was terminated');
      if (res.complete) console.log(res);
    });
  });
  req.end();
  return $server;
}
