const express = require('express');
const bcrypt = require('bcrypt');
const sqlite = require('sqlite3');
const db = require('../config/db.js')
const router = express.Router();


router.get('/', (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Welcome to our API!"
    })
})


module.exports = router;

