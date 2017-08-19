var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	const indexJson = require('../templates/index.js');
	res.render('index', indexJson);
});

module.exports = router;
