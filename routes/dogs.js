const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  let dogs = {
    code: 200,
    status: "0",
    message:"success",
    data:{
      result: ["哈士奇", "藏獒", "贵宾犬", "松狮", "边境牧羊犬", "吉娃娃", "德国牧羊犬", "秋田犬", "柴犬"]
    }
  }
  res.send(JSON.stringify(dogs));
});

/*
url: dogs/move
*/

router.get('/move', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  res.send('move handler for /dogs route.');
});

router.post('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  res.send('POST handler for /dogs route.');
});

module.exports = router;
