const express = require('express');
const sqlite = require('sqlite3');
const bcrypt = require('bcrypt');
const e = require('express');
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

    if (!body.fname && body.lname && body.email && body.password && body.cpassword) {
        console.log("No form data")
        return res.status(400).json({
            status: 400,
            message: "Invalid Request!"
        })
    }

    if ((body.fname.includes("'")) || (body.lname.includes()) || (body.email.includes("'")) || (body.password.includes("'")) || (body.cpassword.includes("'"))){
        console.log('Stopped SQL Injection')
        return res.status(400).json({
            status: 400,
            message: "Security error, do not use (')"
        })
    }


    if (body.password !== body.cpassword) {
        return res.status(400).json({
            status: 400,
            message: "Please make sure the two passwords match!"
        })
    }

    if (body.password.length < 8) {
        return res.status(400).json({
            status: 400,
            message: "Please make sure the password is over 8 characters!"
        })
    }

    const salt = await bcrypt.genSalt(10);
    body.password = await bcrypt.hash(body.password, salt);
    const role = 0
    db.run(
        `
        INSERT INTO User (fname, lname, email, password)
        VALUES ('${body.fname}', '${body.lname}', '${body.email}', '${body.password}');
        `
    , (error, data) => {
        if (error) {
            console.error(error);
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
    if ((body.fname.includes("'")) || (body.lname.includes()) || (body.email.includes("'")) || (body.password.includes("'"))){
        console.log('Stopped SQL Injection')
        return res.status(400).json({
            status: 400,
            message: "Security error, do not use (')"
        })
    }

    const checkHash = (email) => {
        db.get(`SELECT password FROM User WHERE email = '${body.email}'`, (error, data) => {
            if (error) {
                console.log(error);
                return false;
            } else {
                if (bcrypt.compare(body.password, data.password)) {
                    return true;
                }
                return false;
            }
        })
    }

    if (checkHash(body.email)) {
        console.log("test")
    } else {
        console.log("no");
    }

    // if (!checkHash(body.email)) {
    //     return res.status(400).json({
    //         status: 400,
    //         message: "You have either not created an account, or have entered the wrong credentials!"
    //     })
    // }

    // if (bcrypt.compare(body.password, password)) {
    //     db.get(
    //         `
    //         SELECT * FROM User where email = '${body.email}' and password = '${password}';
    //         `
    //     , (error, data) => {
    //         if (error) {
    //             console.error(error)
    //             return res.status(500).json({
    //                 status: 500,
    //                 error: error,
    //                 message: 'Database Error'
    //             })
    //         }
    //         else {
    //             console.log('Query was successful');
    //             return res.status(200).json({
    //                 status: 200,
    //                 message: data,
    //                 loggedIn: true
    //             })
    //         }
    //     })
    // } else {
    //     return res.status(400).json({
    //         status: 400,
    //         message: "Invalid Credentials, please try again!"
    //     })
    // }
})


module.exports = router;