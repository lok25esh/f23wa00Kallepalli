var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  var ranDigit = Math.random()* 100;
  var z = ranDigit;

  if (req.query.z !== undefined) {
    z = parseFloat(req.query.x);
  }

  var output = Math.round(z);
  var result = `Round function applied to ${z} is ${output}`
  
  res.render('computation', { title: result });
});

module.exports = router;