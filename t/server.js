var http = require('http'),
    options = {method: 'HEAD', host: 'localhost', port: 8081, path: '/'},
    req = http.request(options, function(r) {
        console.log(JSON.stringify(r.headers));
    });
req.end();
