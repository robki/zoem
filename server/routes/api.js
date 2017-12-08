//TODO

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/zoem', (err, db) => {
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

// Get users
router.get('/users', (req, res) => {
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

router.get('/cars', (req, res) => {
    connection((db) => {
        db.collection('cars')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));

var User = require('../../data/models/userModel');

// CREATES A NEW USER
router.post('/', function (req, res) {
    
        User.create({
                firstName : req.body.firstname,
                lastName : req.body.lastname,
                
            }, 
            function (err, user) {
                if (err) return res.status(500).send("There was a problem adding the information to the database.");
                res.status(200).send(user);
            });
    
    });

module.exports = router;