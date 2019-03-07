const express = require('express');
const app = express();
var dogs = require('./routes/dogs');

app.all('*', function(req, res, next) {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type, Authorization');
  res.set('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/dogs', dogs);

app.get('/', function(req, res) {
  let result = {
    code: 200,
    status: "0",
    data: {
      result: ["好人一生平安", "同一个世界同一个梦想"]
    },
    msg: "success"
  }
  res.send(JSON.stringify(result));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
