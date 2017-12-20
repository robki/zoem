const mongoose = require('mongoose');
let emailRegExp = /.+\@.+\..+/;
let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        index: true
    },
    lastName: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: false,
        match: /.+\@.+\..+/ //RegExp voor email
    },
    password: {
        type: String,
        unique: true
    },
    createdOn: {
        type: Date,
        'default': Date.now
    }
});
module.exports = UserSchema;