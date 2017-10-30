"use strict";

const path = require("path"),
      requestHandlers = require("./requestHandlers.class"),
      url = require("url"),
      querystring = require("querystring");

let router = (function(){

    let _staticFolder;
    let setStaticFolder = (value) => {_staticFolder = value;};
    let getStaticFolder = () => {return _staticFolder;};

    let extensions = {
        ".html": "text/html",
        ".txt": "text/txt", 
        ".css": "text/css",
        ".js": "application/javascript",
        ".png": "image/png", 
        ".gif": "image/gif", 
        ".jpg": "image/jpeg",
        ".mp4": "video/mp4",
        ".json": "application/json",
        ".ico": "image/x-icon"
    };

    let init = function(req,res,cb){
        //1. Pull up the extension
        if(req.url === "/"){
            req.url = "index.html";
        }
        let ext = path.extname(path.basename(req.url)),
            qs = url.parse(req.url).query;

        //2. Call the handler
        if (req.method == "GET"){
            let fileName = path.normalize(_staticFolder + "/" + req.url);

            //2.1 If querystring
            if(qs){
                let ext = path.extname(path.basename(fileName));

                switch(ext){
                    case ".mp4":
                        fileName = "resources/videos/"+ qs.split("=")[1];
                        break;
                    case ".js" || ".png" || ".gif":
                        fileName = "resources/images" + qs.split("=")[1];
                        break;
                    default:
                }
            }
            //2.2 Get handler
            requestHandlers.getFile(fileName, (error,rs) => {
                if(error){
                    cb(error,null);
                } else{
                    cb(null,rs,extensions[ext]);
                }
            });
        }

        else{
            console.log("No Handler Available Yet For : " +req.url);
        }
    };
    return{init,setStaticFolder};

})();

module.exports = router;