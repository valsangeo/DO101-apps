var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/moon', function (req, res) {
  res.send('Hello Moon!\n');
});

app.listen(33250, function () {
  console.log('Example app listening on port 33250!');
});

