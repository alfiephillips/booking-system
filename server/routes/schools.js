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

router.get('/:id', async (req, res) => {
    _id = req.params.id
    db.get(
        `SELECT * FROM Schools WHERE id = ${_id};`
    , (error, data) => {
        if (error) {
            console.error(error);
            return res.status(404).json({
                status: 404,
                message: `http://localhost/schools/${_id} has not found a school!`
            })
        } else {
            return res.status(201).json({
                status: 201,
                data: data
            })
        }
    })
})

module.exports = router;