const mongoose = require("mongoose");
let userschema = require("../schemas/user");
let User = mongoose.model("User", userschema, "users");

//DATA ACCESSORS
User.getAllUsers = function(callback){
    User.find({}).exec(function(err,docs){
        if(err){
            console.log(err);
            callback(err,null);
        }

        console.log(docs);
        callback(null,docs);

    });
};



module.exports = User;


