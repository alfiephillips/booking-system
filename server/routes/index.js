const express = require('express');
const bcrypt = require('bcrypt');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();


router.get('/', (req, res) => {
    res.status(200).json({
        current_user_url: "https://localhost:3000/auth/user",
        current_user_school: "https://localhost:3000/auth/user/schools",
        message: "Welcome to the API"
    })
})

module.exports = router;

