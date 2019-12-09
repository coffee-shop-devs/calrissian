const express     = require('express');
const app         = express();
const compression = require('compression');
const helmet      = require('helmet');
const fs          = require('fs');
const css         = { style: fs.readFileSync('./views/styles.css', 'utf8')}
const port        = 8081;

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.use([compression, helmet])
app.listen(8081, function () {
  console.log(`App running on port ${port}`);
});

app.get('/?', function (req, res) {
  res.render('index.html', {
    title: "Title",
    css:   css,
  })
})