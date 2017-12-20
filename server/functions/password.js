'use strict';

const user = require('../data/models/user');
const bcrypt = require('bcryptjs');
const randomstring = require("randomstring");
const config = require("../config/config.json");


exports.changePassword = (email, password, newPassword) => 

	new Promise((resolve, reject) => {

		user.find({ email: email })

		.then(users => {

			let user = users[0];
			const hashed_password = user.hashed_password;

			if (bcrypt.compareSync(password, hashed_password)) {

				const salt = bcrypt.genSaltSync(10);
				const hash = bcrypt.hashSync(newPassword, salt);

				user.hashed_password = hash;

				return user.save();

			} else {

				reject({ status: 401, message: 'Invalid Old Password !' });
			}
		})

		.then(user => resolve({ status: 200, message: 'Password Updated Sucessfully !' }))

		.catch(err => reject({ status: 500, message: 'Internal Server Error !' }));

	});
