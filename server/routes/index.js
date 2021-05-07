const express = require('express');
const bcrypt = require('bcrypt');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();


// @route GET /

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to the api!",
        password: password
    })
})

module.exports = router;

