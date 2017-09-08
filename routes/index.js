var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/api/whoami', function(req, res, next) {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  if (ip.substr(0, 7) == "::ffff:") {
    ip = ip.substr(7)
  }
  var language = req.acceptsLanguages()[0];
  var software = req.useragent.platform + '; ' + req.useragent.os;
  var browser = req.useragent.browser;
  res.json({ipadsress: ip, language: language, software: software, browser: browser});
});

module.exports = router;
