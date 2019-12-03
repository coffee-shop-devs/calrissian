'use strict';

const request = require('request');
var tests = [
  testBody
];

run(tests);

function run(tests) {
  // Create child process
  console.log("Starting application");
  var proc = require('child_process').spawn('node', ['./server.js'], {
    detached: true,
    stdio:    'inherit',
  });
  console.log(`Proc pid ${proc.pid}`);

  var i;
  for (i = 0; i < tests.length; i++) {
    tests[i]();
  }

  // Kill the child process
  proc.kill();
  if ( proc.killed == true ) {
    console.log('Killed application');
  }
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
