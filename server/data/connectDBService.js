module.exports = (function (configURL, database) {
    //var mongoose = database;
    var db = database.connect(configURL);// connecteer de database
    
    database.connection.on("open", function () {
        //mongoose test:
        
        var msg = "connection met mongo server " +configURL;
        

        //collection (=table) names met data als test (obj heeft geen lengte)
        var collections = database.connection.collections;
        msg += "\n \t with known collections/models: ";
        for (var property in collections) {
            msg += collections[property].name + ", ";
        }
        
        console.log(msg);
    });
    
    database.connection.on("error", function (error) {
        console.log("connection error: " , error.message);
    });
    
    database.connection.on("close", function () {
        console.log("connection closed: ", configURL);
    });
    
    return database; // mongoose connected
});