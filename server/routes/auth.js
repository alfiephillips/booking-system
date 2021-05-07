const express = require('express');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();
const {
    ensureAuth,
    ensureLoggedIn
} = require('../middleware/auth')

router.get('/', (req, res) => {
    return res.json({message: "Welcome to the School Booking System API"});
})

router.get('/register', (req, res) => {
    return res.json({status: "ok"});
})

router.post('/register', (req, res) => {
    console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const phone = req.body.phone;
    const school = req.body.school;
    const password = req.body.role;

    db.run(
        `
        INSERT INTO User (fname, lname, email, password)
        VALUES ('${fname}', '${lname}', '${email}', '${password}');
        `
    , (error) => {
        if (error) {
            console.log(error);
            return res.status(500).json({
                error: error
            })
        } else {
            res.status(201).json({status: "success"})
        }
    })
})


module.exports = router;