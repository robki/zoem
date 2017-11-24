var express = require('express');
var router = express.Router();
var User = require("../data/models/user");

var loadUser = require('./middleware/load_user'); //ophalen van één user


module.exports = function (app) {
  router.get('/', function (req, res) {
    User.find({}).sort("lastname").sort('firstname').exec(function (err, docs) {
      res.render('users/index', {
        title: 'Users overzicht',
        userlist: docs
      });
    })
  });

  router.get('/:name', loadUser, function (req, res, next) {
    res.render('users/details', { title: 'User profile', user: req.user })
    })
};