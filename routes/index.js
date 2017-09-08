var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/whoami', function(req, res, next) {
  res.json({ipadress: req.ip, language:req.acceptsLanguages()[0], software: req.useragent.platform + '; ' + req.useragent.os, browser: req.useragent.browser});
});

module.exports = router;
