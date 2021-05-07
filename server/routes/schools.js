const express = require('express');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();
const {
    ensureAuth,
    ensureLoggedIn
} = require('../middleware/auth')

router.get('/', (req, res) => {
    res.json({status: "ok"})
})

module.exports = router;