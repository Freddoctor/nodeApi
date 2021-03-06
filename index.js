const express = require('express');
const app = express();

var dogs = require('./routes/dogs');
var cats = require("./routes/cats");
var logger = require('./component/logger');

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
  // res.set('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/dogs', dogs);
app.use('/cats', cats);

app.use(express.static('public'))

app.get('/', function(req, res) {
  // res.set('Content-Type', 'text/html;charset=utf-8');
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function() {
  console.info(`Example app listening on port 3000! ${new Date()}`);
});
