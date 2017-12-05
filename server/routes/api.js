//TODO

const express = require('express');
const router = express.Router();
const users = require("../../data/models/usersRepo");


/* GET api listing. */
router.get('/', users.getAllUsers);

module.exports = router;