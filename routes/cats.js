const express = require('express');
const router = express.Router();

var logger = require('../component/logger');

router.get('/', function(req, res) {
  res.set('Content-Type', 'application/json;charset=utf-8');
  let cats = {
    code: 200,
    status: "0",
    message:"success",
    data:{
      result: ["暹罗猫", "布偶猫", "苏格兰折耳猫", "英国短毛猫", "波斯猫", "俄罗斯蓝猫", "美国短毛猫", "异国短毛猫", "挪威森林猫"]
    }
  }
  logger.trace(`${JSON.stringify(cats)}`);
  res.send(JSON.stringify(cats));
});

module.exports = router;
