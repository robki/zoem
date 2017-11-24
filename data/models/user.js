var mongoose = require("mongoose");
var UserSchema = require("../schemas/user");
var User = mongoose.model('User', UserSchema,"users"); //model,schema,collection

User.getUsers = function (callback) {
    User.find({}).exec(function (err, doc) {
       if(err) { console.log(err); }
       callback(doc);
    });
};

module.exports = User;