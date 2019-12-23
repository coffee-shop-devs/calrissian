const express     = require('express');
const app         = express();
const compression = require('compression');
const helmet      = require('helmet');
const fs          = require('fs');
const css         = { style: fs.readFileSync('./views/styles.css', 'utf8')}

// Change this if you have something else in mind
var port = 3000;

const server = app.listen(port, function () {});

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use([compression, helmet])

app.get('/?', function (req, res) {
  res.render('index.html', {
    title: "Title",
    css:   css,
  })
})
