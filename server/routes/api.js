const express = require('express');
const router = express.Router();
var User = require('../data/models/user');

// Get Users
router.get('/getusers', function(req,res,next){  
  User.getAllUsers(function(err,results){
    if(err) console.log(err);
    var users = results;
    res.json(users);
    //console.log(users);
  });
});


// Get user by id
router.get('/getusers/:id',function(req,res){
  User.find({"id": req.params.id},function(err,results){
    if(err) console.error(err);
    var cars = results;
    //console.log(cars);
    res.json(cars);
});
});



module.exports = router;





// //OLD CREATES A NEW USER (REGISTER)
// router.post('/oldregister', function (req, res) {

//   User.create({
//       firstName: req.body.firstname,
//       lastName: req.body.lastname,
//       email: req.body.email,
//       password: req.body.password

//     },
//     function (err, user) {
//       if (err) return res.status(500).send("There was a problem adding the information to the database.");
//       res.status(200).send(user);
//     });

// });

// //OLD DELETE A USER
// router.delete('/user/:id', function (req, res) {

//   User.findByIdAndRemove(req.params.id, function (err, user) {
//     if (err) return res.status(500).send("There was a problem deleting the user.");
//     res.status(200).send("User " + user.lastName + " " + user.firstName + " was deleted.");
//   });
// });


