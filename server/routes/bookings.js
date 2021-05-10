const express = require('express');
const sqlite = require('sqlite3');
const db = new sqlite.Database('./database.db')
const router = express.Router();
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
const crypto = require("crypto");

var jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 60,
        jwksUri: 'https://booking-sys.eu.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000',
  issuer: 'https://booking-sys.eu.auth0.com/',
  algorithms: ['RS256']
});

router.use(jwtCheck);

router.get('/', jwtCheck, (req, res) => {

    db.all(
        `SELECT * FROM Bookings`
    , (error, data) => {
        console.log(data);
        if (error) {
            return res.status(400).json({
                status: 401,
                error: error,
                message: "Could not find any bookings."
            })
        } else {
            return res.status(201).json({
                status: 201,
                data: data,
                message: "Bookings"
            })
        }
    })
})

router.post('/create', jwtCheck, (req, res) => {
    body = req.body
    const id = crypto.randomBytes(16).toString("hex");
    time_created = Date.now();

    db.run(
        `
        INSERT INTO Bookings (id, room_name, author, class, start_time, end_time, time_created)
        VALUES ('${id}', '${body.room_name}', '${body.author}', '${body.class}', ${body.start_time}, ${body.end_time}, ${time_created})
        `
    , (error, data) => {
        if (error) {
            console.log(error);
            return res.status(400).json({
                status: 400,
                error: error,
                message: "Failure to add your booking, please try again."
            })
        } else {
            return res.status(201).json({
                status: 201, 
                data: data,
                message: "Booking created!"
            })
        }
    })
})

router.get('/:id', jwtCheck, (req, res) => {
    id = req.params.id

    db.get(`
        SELECT * FROM Bookings WHERE id = '${id}'
    `, (error, data) => {
        if (error) {
            console.log(error);
            return res.status(404).json({
                status: 404,
                error: error,
                message: "That booking was not found, please create one first!"
            })
        } else {
            console.log(data);
            return res.status(200).json({
                status: 200,
                data: data,
                message: "Booking"
            })
        }
    })
})


module.exports = router;