"use strict";

var config = {
    HOST: 'http://localhost',
    PORT:  9696,
    MONGODBURL : process.env.MONGO_URI || 'mongodb://localhost/zoem',
};

module.exports = config;