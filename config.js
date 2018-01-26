"use strict";

var config = {
    HOST: 'http://localhost',
    PORT:  3000,
    MONGODBURL : process.env.MONGO_URI || 'mongodb://localhost/zoem2',
    //'mongodb://zoem:zoem123456@ds251727.mlab.com:51727/zoem'
};

module.exports = config;