'use strict';


const request = require('request');

test();

function test() {
  // Create child process
  console.log("Starting application");
  var proc = require('child_process').spawn('node', ['./server.js'], {
    detached: true,
    stdio:    'inherit',
  });
  // Check for pid from child process - if true, make a request
  if (proc.pid) {
    console.log(`Started application with pid ${proc.pid}`);
    request('http://0.0.0.0:8081', function( err, res, body ){
      if (body == "Hello World!") {
        console.log("Test passed. Confirmed request body matched");
      }
    });
  }
  // Kill the child process
  proc.kill();
  if ( proc.killed == true ) {
    console.log('Killed application');
  }
}
