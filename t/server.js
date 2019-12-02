'use strict';

const request = require('request');
var proc;

<<<<<<< Updated upstream
setup();
setTimeout(testBody,100);
setTimeout(teardown,200);

function setup() {
=======
//var proc;

//var proc;

test();

function setup() {
  // Create child process
  console.log("Starting application");
  proc = require('child_process').spawn('node', ['./server.js'], {
    detached: true,
    stdio:    'inherit',
  });
}

function test() {

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  // Create child process
  console.log("Starting application");
  proc = require('child_process').spawn('node', ['./server.js'], {
    detached: true,
    stdio:    'inherit',
  });
<<<<<<< Updated upstream
<<<<<<< Updated upstream
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
=======
=======
>>>>>>> Stashed changes

  // Check for pid from child process - if true, make a request
  if (proc.pid) {
    console.log(`Started application with pid ${proc.pid}`);
    request('http://0.0.0.0:8081', function( err, res, body ){
      if (body == "Hello World!") {
        console.log("Test passed. Confirmed request body matched");
      } else {
        console.log(body);
        console.log(err);
      }
    });
  }
>>>>>>> Stashed changes
  // Kill the child process
  proc.kill();
  if ( proc.killed == true ) {
    console.log('Killed application');
  }
}
