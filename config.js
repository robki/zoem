"use strict";

var config = {
    HOST: 'http://localhost',
    PORT:  3000,
    MONGODBURL : process.env.MONGO_URI || 'mongodb://localhost:27017/zoem2',
};

module.exports = config;