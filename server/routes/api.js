const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
var User = require('../data/models/user');
router.use(bodyParser.urlencoded({
  extended: true
}));


//Connect
const connection = (closure) => {
  return MongoClient.connect('mongodb://localhost:27017/zoem2', (err, db) => {
    if (err) return console.log(err);

    closure(db);
  });
};

// Error handling
const sendError = (err, res) => {
  response.status = 501;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(501).json(response);
};

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Get Users
router.get('/getusers', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((cars) => {
        response.data = cars;
        res.json(cars);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

// Get Cars
router.get('/getcars', (req, res) => {
  connection((db) => {
    db.collection('cars')
      .find()
      .toArray()
      .then((users) => {
        response.data = users;
        res.json(users);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});
// Get Car by id
router.get('/getusers/:id', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((cars) => {
        response.data = cars;
        res.json(cars);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});
//OLD CREATES A NEW USER (REGISTER)
router.post('/oldregister', function (req, res) {

  User.create({
      firstName: req.body.firstname,
      lastName: req.body.lastname,
      email: req.body.email,
      password: req.body.password

    },
    function (err, user) {
      if (err) return res.status(500).send("There was a problem adding the information to the database.");
      res.status(200).send(user);
    });

});
// USER LOGIN
router.post('/login', function (req, res) {});



// GET A SINGLE USER
router.get('/olduser/:id', function (req, res) {

  User.findById(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem finding the user.");
    if (!user) return res.status(404).send("No user found.");
    res.status(200).send(user);
  });

});

// UPDATE A USER (TODO)

// DELETE A USER
router.delete('/user/:id', function (req, res) {

  User.findByIdAndRemove(req.params.id, function (err, user) {
    if (err) return res.status(500).send("There was a problem deleting the user.");
    res.status(200).send("User " + user.lastName + " " + user.firstName + " was deleted.");
  });
});

module.exports = router;
