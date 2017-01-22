var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fabs Enterprise', subtitle: 'Your number one meat shop in Ghana' });
});

module.exports = router;
