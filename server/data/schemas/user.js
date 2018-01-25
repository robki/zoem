const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports= new mongoose.Schema({
    id:{type:String},
    email:{type:String},
    firstname:{type:String},
    lastname:{type:String},
    password:{type:String},
    cars:[
        {
            id:{type:String},
            make:{type:String},
            type:{type:String},
            registration:{type:String},
            seating:{type:String},
            doors:{type:String},
            mileage:{type:String},
            lat:{type:String},
            lng:{type:String},
            images:{type:String},
            available:{type:String},
            price:{type:String},
            paid:{type:String}
        }
    ]
});