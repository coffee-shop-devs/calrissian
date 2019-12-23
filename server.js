const express = require('express');
const app     = express();
const fs      = require('fs');
const path    = require('path');
const css     = { style: fs.readFileSync('./views/styles.css', 'utf8')}

// Change this if you have something else in mind
var port = 3000;

const server = app.listen(port, function () {});

app.use(express.static(path.join(__dirname, '/views')))
app.engine('html', require('ejs').renderFile);

app.get('/?', function (req, res) {
  res.render('index.html', {
    title: "Random Language Generator",
    css:   css,
  })
})
