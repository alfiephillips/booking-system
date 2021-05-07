const express = require('express');
const sqlite = require('sqlite3');
const bcrypt = require('bcrypt');
const db = new sqlite.Database('./database.db')
const router = express.Router();

router.get('/', (req, res) => {
    return res.json({message: "Welcome to the School Booking System API"});
})

router.get('/register', (req, res) => {
    return res.json({status: "ok"});
})


router.post('/register', async (req, res) => {
    let body = req.body;

    db.run(
        `
        INSERT INTO User (fname, lname, email, password)
        VALUES ('${body.fname}', '${body.lname}', '${body.email}', '${body.password}');
        `
    , (error, data) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                error: error,
                message: "Error creating an account, please try again!"
            })
        } else {
            return res.status(201).json({
                status: 201,
                data: data,
                message: "Account created successfully!",
                loggedIn: true
            })
        }
    })
})


module.exports = router;