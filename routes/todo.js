var express = require('express');
var router = express.Router();
var todo = [
	{
		section: "Menu",
		action: "Beef  Mutton  Chevon"
	}
]
/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send(todo);
});

module.exports = router;
