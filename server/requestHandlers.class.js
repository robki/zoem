"uses strict";

const fs = require("fs"),
      path = require("path"),
      config = require("../config");

class RequestHandlers{
    constructor(){}
    static getFile(fileName,cb){
        //fs.access
        fs.stat(fileName, function(err,stats){
            if(stats && stats.isFile()){
                cb(null,fs.createReadStream(fileName));
            } else{
                //ERROR CONTROLE
                cb(new Error("This file doesn't exist ;("),null);
            }
        });
    }
}

module.exports = RequestHandlers;