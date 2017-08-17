var express = require('express');
var router = express.Router();


/* Coffi app details. */
router.get('/coffi', function(req, res) {
  const jsonInput = require('../templates/coffi.js');
  res.render('coffi', jsonInput);
});


/* Softgarden app details. */
router.get('/sgapp', function(req, res) {
  const jsonInput = require('../templates/just_hire.js');
  res.render('just_hire', jsonInput);
});

/* BVG app details. */
router.get('/bvg', function(req, res) {
  const jsonInput = require('../templates/bvg.js');
  res.render('bvg', jsonInput);
});

module.exports = router;
