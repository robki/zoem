var mongoose = require("mongoose");
var User = require("./userModel");

exports.getAllUsers = function(req,res){
    User.find({}).exec(function(err,docs){
        if(err){
            res.send(err);
        }
        else{
            res.json(docs);
        }
    });
};

exports.findUserByLastName = function (_lastName,callback){
    User.findOne({lastName: _lastName}, function(err,doc){
        console.log(_lastName);
        
    });
};