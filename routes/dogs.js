const express = require('express');

const router = express.Router();

var logger = require('../component/logger');


var mongodbserver =  require("../component/mongo.sql.js");

router.get('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  let dogs = {
    code: 200,
    status: "0",
    message: "success",
    data: {
      result: ["哈士奇", "藏獒", "贵宾犬", "松狮", "边境牧羊犬", "吉娃娃", "德国牧羊犬", "秋田犬", "柴犬"]
    }
  }
  logger.trace(`${JSON.stringify(dogs)}`);
  res.send(JSON.stringify(dogs));
});

/*
url: dogs/move
*/

router.get('/add', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  let addJson = {
    code: 200,
    status: "0",
    data: {
      name: req.query ? req.query.name : ""
    },
    message: "success"
  }
  if (req.query.callback) {
    res.jsonp(addJson); // res.send(req.query.callback + '('+ JSON.stringify(addJson) + ')');
  } else {
    res.json(addJson)
  }

  mongodbserver.insertOne("site", addJson);

});

router.post('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  res.send('POST handler for /dogs route.');
});

module.exports = router;
