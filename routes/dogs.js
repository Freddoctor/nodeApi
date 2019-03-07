const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.send('GET handler for /dogs route.');
});

router.get('/move', function(req, res) {
  /*
  url: dogs/move
  */
  res.send('move handler for /dogs route.');
});

router.post('/', function(req, res) {
  res.send('POST handler for /dogs route.');
});

module.exports = router;
