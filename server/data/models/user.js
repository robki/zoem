"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let emailRegExp = /.+\@.+\..+/;

const userSchema  = mongoose.Schema({
    firstname: {
        type: String,
        index: true
    },
    lastname: {
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
    }
});

mongoose.Promise = global.Promise;

module.exports = mongoose.model('user', userSchema);
