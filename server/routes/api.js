const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var bodyParser = require('body-parser');
//var User = require('../data/models/user');
router.use(bodyParser.urlencoded({
  extended: true
}));

const auth = require('basic-auth');
const jwt = require("jsonwebtoken");

const register = require("../functions/register");
const login = require('../functions/login');
const profile = require('../functions/profile');
const password = require('../functions/password');
const config = require('../config/config.json');


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
module.exports = router
// Get Users
router.get('/getusers', (req, res) => {
  connection((db) => {
    db.collection('users')
      .find()
      .toArray()
      .then((cars) => {
        response.data = cars;
        res.json(response);
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
        res.json(response);
      })
      .catch((err) => {
        sendError(err, res);
      });
  });
});

// CREATES A NEW USER (REGISTER)
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
router.post('/login', function (req, res) {
});


  
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
    res.status(200).send("User " + user.lastName + " " + user.firstName  + " was deleted.");
  });
});


//**************************
//learn2crack authenticatie
//**************************

router.post('/authenticate', (req,res) => {
  const credentials = auth(req);

  if(!credentials){
    res.status(400).json({message: "INVALID REQUEST!"});
  }
  else{
    login.loginUser(credentials.name,credentials.pass)
    .then(result =>{
      const token = jwt.sign(result,config.secret,{expiresIn:1440});
      res.status(result.status).json({message:result.message,token:token})
    })
    .catch(err=> res.status(err.status).json({message:err.message}));
  }
});

router.post('/users', (req, res) => {
  
      const firstname = req.body.firstname;
      const lastname = req.body.lastname;
      const email = req.body.email;
      const password = req.body.password;
  
      if (!firstname || !lastname || !email || !password || !firstname.trim() || !lastname.trim() || !email.trim() || !password.trim()) {
  
        res.status(400).json({message: 'Invalid Request !'});
  
      } else {
  
        register.registerUser(name, email, password)
  
        .then(result => {
  
          res.setHeader('Location', '/users/'+email);
          res.status(result.status).json({ message: result.message })
        })
  
        .catch(err => res.status(err.status).json({ message: err.message }));
      }
});

router.get('/users/:id', (req,res) => {
  
      if (checkToken(req)) {
  
        profile.getProfile(req.params.id)
  
        .then(result => res.json(result))
  
        .catch(err => res.status(err.status).json({ message: err.message }));
  
      } else {
  
        res.status(401).json({ message: 'Invalid Token !' });
      }
    });
  
    router.put('/users/:id', (req,res) => {

		if (checkToken(req)) {

			const oldPassword = req.body.password;
			const newPassword = req.body.newPassword;

			if (!oldPassword || !newPassword || !oldPassword.trim() || !newPassword.trim()) {

				res.status(400).json({ message: 'Invalid Request !' });

			} else {

				password.changePassword(req.params.id, oldPassword, newPassword)

				.then(result => res.status(result.status).json({ message: result.message }))

				.catch(err => res.status(err.status).json({ message: err.message }));

			}
		} else {

			res.status(401).json({ message: 'Invalid Token !' });
		}
  });
  
router.put('/users/:id', (req,res) => {
    
  if (checkToken(req)) {
    
    const oldPassword = req.body.password;
    const newPassword = req.body.newPassword;
    
    if (!oldPassword || !newPassword || !oldPassword.trim() || !newPassword.trim()) {
    
      res.status(400).json({ message: 'Invalid Request !' });
    
    } else {
    
      password.changePassword(req.params.id, oldPassword, newPassword)
    
      .then(result => res.status(result.status).json({ message: result.message }))
    
      .catch(err => res.status(err.status).json({ message: err.message }));
    
    }
  } else {
    
    res.status(401).json({ message: 'Invalid Token !' });
  }
});

router.post('/users/:id/password', (req,res) => {
  
      const email = req.params.id;
      const token = req.body.token;
      const newPassword = req.body.password;
  
      if (!token || !newPassword || !token.trim() || !newPassword.trim()) {
  
        password.resetPasswordInit(email)
  
        .then(result => res.status(result.status).json({ message: result.message }))
  
        .catch(err => res.status(err.status).json({ message: err.message }));
  
      } else {
  
        password.resetPasswordFinish(email, token, newPassword)
  
        .then(result => res.status(result.status).json({ message: result.message }))
  
        .catch(err => res.status(err.status).json({ message: err.message }));
      }
    });

    function checkToken(req) {
      
          const token = req.headers['x-access-token'];
      
          if (token) {
      
            try {
      
                var decoded = jwt.verify(token, config.secret);
      
                return decoded.message === req.params.id;
      
            } catch(err) {
      
              return false;
            }
      
          } else {
      
            return false;
          }
        }

module.exports = router;
      