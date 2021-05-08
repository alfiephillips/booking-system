const express = require('express');
const bcrypt = require('bcrypt');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();


router.get('/', (req, res) => {
    res.json({
        message: "Welcome to the api!",
    })
})

module.exports = router;

