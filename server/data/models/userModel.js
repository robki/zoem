// data/models/user.js

var mongoose = require("mongoose");
var UserSchema = require("../schemas/userSchema");
var User = mongoose.model('User', UserSchema,"users"); //model,schema,collection


module.exports = User;