var mongoose = require("mongoose");

var emailRegExp = /.+\@.+\..+/;

var UserSchema = new mongoose.Schema({
    firstname: {type: String},
    lastname: {type: String},
    email: {
        type:String,
        match: emailRegExp
    },
    createdOn: {type:Date, 'default':Date.now }

});