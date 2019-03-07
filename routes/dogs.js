const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  res.send('GET handler for /dogs route.');
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
