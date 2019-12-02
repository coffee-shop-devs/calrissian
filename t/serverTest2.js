'use strict';

const request = require('request');
var proc;

setup();
setTimeout(testBody,100);
setTimeout(teardown,200);

function setup() {
  // Create child process
  console.log("Starting application");
  proc = require('child_process').spawn('node', ['./server.js'], {
    detached: true,
    stdio:    'inherit',
  });
  console.log(`Proc pid ${proc.pid}`);
}

function testBody() {
  // Check for pid from child process - if true, make a request
  request('http://localhost:8081', { timeout: 5 }, function( err, res, body ){
    if (body == "Hello World!") {
      console.log("Test passed. Confirmed request body matched");
    } else {
      console.log(body);
      console.log(err);
    }
  });
}

function teardown() {
  // Kill the child process
  proc.kill();
  if ( proc.killed == true ) {
    console.log('Killed application');
  }
}
