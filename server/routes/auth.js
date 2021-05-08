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
        INSERT INTO User (fname, lname, email, password, admin)
        VALUES ('${body.fname}', '${body.lname}', '${body.email}', '${body.password}, 0');
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

router.get('/login', (req, res) => {
    return res.json({status: "ok"});
})

router.post('/login', async (req, res) => {
    let body = req.body;
    if ((body.email.includes("'")) || (body.password.includes("'"))){
        console.log('Stopped SQL Injection')
        return res.status(400).json({
            status:400,
            message: 'Security error'
        })
    }
    db.get(
        `
        SELECT * FROM User where email = '${body.email}' and password = '${body.password}';
        `
    , (error, data) => {
        if (error) {
            console.error(error)
            return res.status(500).json({
                status:500,
                error: error,
                message: 'Database Error'
            })
        }
        else {
            console.log('Query was successful');
            return res.status(200).json({
                status: 200,
                message: data
            })
        }

    })
})


module.exports = router;