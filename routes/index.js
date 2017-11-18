var express = require('express');
var router = express.Router();
var path  =require("path");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,"../public","/index.html"));
});

router.get('/about', function(req, res, next) {
  res.sendFile(path.join(__dirname,"../public","/about.html"));
});

router.get('/register', function(req, res, next) {
  res.sendFile(path.join(__dirname,"../public","/register.html"));
});

module.exports = router;
