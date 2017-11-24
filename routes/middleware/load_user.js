var User = require("../../data/models/user");

function load_user(req, res/**, next**/){
    User.findOne({username: req.params.username }, function (err, user) {
        if(err){
            //return next(err);
        }
        if(!user){
            return res.send("Not Found", 404);
        }
        else{
            req.user = user;
            //next();
        }
    });
}

module.exports = load_user;