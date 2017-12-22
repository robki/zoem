
'use strict';

const user = require("../data/models/user");
const bcrypt = require('bcryptjs');

exports.registerUser = (firstname,lastname,email,password) =>

    new Promise((resolve,reject) => {

        const salt = bcrypt.genSalt(10);
        const hash = bcrypt.hashSync(password,salt);

        const newUser = new user({
            firstname: firstname,
            lastname: lastname,
            email:email,
            hashed_password: hash,
            created_at: new Date()
        });

        //wilt niet loggen 
        console.log(newUser);

        newUser.save()

        .then(() => resolve({status: 201, message:"User Registered!"}))

        .catch(err =>{
            if(err.code == 11000){
                reject({ status: 409, message: 'User Already Registered !' });
            } else {
                reject({ status: 500, message: err.message });
            }
        });

    });