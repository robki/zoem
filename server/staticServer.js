"use strict";

const router = require("./router"),
      path = require("path");

let staticServer = (function(port,hostname){
    const http = require("http");

    const server = http.createServer((req,res) => {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain");

        router.setStaticFolder(path.normalize(process.cwd()+ "/client/public"));

        router.init(req,res,function(err,rs,mimeType){
            process.on("UncaughtException",(err) =>{
                console.log("This error is not handled: \n"+ err);
                res.end("500: Server Error \n"+err.message);
            });

            if(err){
                //Take ErrorCode from handler
                res.writeHead(500);
                res.end("500: Server Error \n"+err.message);
            }
            else{
                res.statusCode = 200;
                rs.on("error", (err)=>{
                    //todo: make handleError
                    console.log(err.message);
                    res.end("500: Streaming Error \n"+err.message);
                });

                res.setHeader("Content-type",mimeType || "text/html");
                rs.pipe(res);
            }
        });
    });

    const init = (port,hostname) =>{
        server.listen(port, hostname, () =>{
            console.log(`Zoem server is running at http://${hostname}:${port}/`)
        });
    };
    return {init};
})();

module.exports = staticServer;