const express     = require('express');
const app         = express();
const server      = app.listen(3000, function () {});
const compression = require('compression');
const helmet      = require('helmet');
const fs          = require('fs');
const css         = { style: fs.readFileSync('./views/styles.css', 'utf8')}

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use([compression, helmet])

app.get('/?', function (req, res) {
  res.render('index.html', {
    title: "Title",
    css:   css,
  })
})