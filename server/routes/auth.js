const express = require('express');
const sqlite = require('sqlite3');
const bcrypt = require('bcrypt');
const fs = require('fs');
const db = new sqlite.Database('./database.db')
const router = express.Router();



router.get('/', (req, res) => {
    return res.json({
        message: "Authentication",
    });
})

router.get('/register', (req, res) => {
    return res.json({
        status: 200,
        message: "Welcome to the register page!"
    });
})


router.post('/register', (req, res) => {
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

    let readStream = fs.createReadStream('.salt', 'utf8');
    let data = '';
    let password = '';
    readStream.on('data', function(chunk) {
        data += chunk;
    }).on('end', async function() {
        let salt = data;
        body.password = await bcrypt.hash(body.password, salt);
        db.run(
            `
            INSERT INTO User (fname, lname, email, password)
            VALUES ('${body.fname}', '${body.lname}', '${body.email}', '${body.password}');
            `
        , (error, data) => {
            if (error) {
                if(error.errno == 19) {
                    console.error(error);
                    return res.status(500).json({
                        status: 500,
                        error: error,
                        message: "Account already exists!"
    
                    })
                } else if (error.errno == 1) {
                    console.error(error);
                    return res.status(500).json({
                        status: 500,
                        error: error,
                        message: "Internal server error."
                    })
                } else {
                    console.error(error);
                    return res.status(500).json({
                    status: 500,
                    error: error,
                    message: "Error creating an account, please try again!"
                })
                }
            } else {
                return res.status(201).json({
                    status: 201,
                    data: data,
                    message: "Account created successfully!",
                    loggedIn: true
                })
            }
        })
    }).on('error', function(err){
        res.end(err);
    });
})

router.get('/login', (req, res) => {
    return res.json({
        status: 200,
        message: "Welcome to the login page!"
    });
})

router.post('/login', async (req, res) => {
    let body = req.body;
    if ((body.email.includes("'")) || (body.password.includes("'"))){
        console.log('Stopped SQL Injection')
        return res.status(400).json({
            status: 400,
            message: "Security error, do not use (')"
        })
    };

    async function checkHash(email, password){
        db.get(`SELECT password FROM User WHERE email = '${body.email}'`, (error, results) => {
            if (error) {
                console.log(error);
                return false;
            } else {
                let readStream = fs.createReadStream('.salt', 'utf8');
                let data = '';
                
                readStream.on('data', function(chunk) {
                    data += chunk;
                }).on('end', async function() {
                    let salt = data;
                    password = await bcrypt.hash(password, salt);
                    if (results.password == password){
                        return true;
                    } else {
                        return false;
                    }

                }).on('error', function(err) {
                    res.end(err);
                });
            }
        })
    }

    if (checkHash(body.email, body.password)) {
        return res.status(201).json({
            status: 201,
            message: "success",
            loggedIn: true
        })
    } else {
        return res.status(400).json({
            status: 400,
            message: "Incorrect password or email!",
        })
    }
})


module.exports = router;