const express = require('express');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();
const {
    ensureAuth,
    ensureLoggedIn
} = require('../middleware/auth')


// @route GET /

router.get('/', (req, res) => {
    res.json({
        message: "Welcome to the api!"
    })
})

module.exports = router;

