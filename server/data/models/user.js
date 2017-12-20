"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let emailRegExp = /.+\@.+\..+/;

const userSchema  = mongoose.Schema({
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
    hashed_password: {
        type: String,
        unique: true
    },
    created_at: {
        type: String
    },
    temp_password	: String,
	temp_password_time: String
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('user', userSchema);
