const express = require("express");
const sqlite = require("sqlite3");
const db = require("../config/db.js");
const router = express.Router();
const jwtCheck = require("../middleware/jwt.js");
const jwtDecode = require("jwt-decode");
const crypto = require("crypto");

router.use(jwtCheck);

router.get("/", jwtCheck, (req, res) => {
	db.all(`SELECT * FROM Bookings`, (error, data) => {
		if (error) {
			return res.status(400).json({
				status: 401,
				error: error,
				message: "There has been error finding any bookings!",
			});
		} else {
			return res.status(201).json({
				status: 201,
				data: data,
				message: `${data.length} bookings.`,
			});
		}
	});
});

router.post("/create", jwtCheck, (req, res) => {
	body = req.body;
	const id = crypto.randomBytes(16).toString("hex");
	time_created = Date.now();

	db.run(
		`
        INSERT INTO Bookings (id, room_name, author, class, start_time, end_time, time_created)
        VALUES ('${id}', '${body.room_name}', '${body.author}', '${body.class}', ${body.start_time}, ${body.end_time}, ${time_created})
        `,
		(error, data) => {
			if (error) {
				console.log(error);
				return res.status(400).json({
					status: 400,
					error: error,
					message: "Failure to add your booking, please try again.",
				});
			} else {
				return res.status(201).json({
					status: 201,
					data: data,
					message: "Booking created!",
				});
			}
		}
	);
});

router.get("/:id", jwtCheck, (req, res) => {
	console.log(req.headers.authorization);
	id = req.params.id;

	db.get(
		`
        SELECT * FROM Bookings WHERE id = '${id}'
    `,
		(error, data) => {
			if (error) {
				console.log(error);
				return res.status(404).json({
					status: 404,
					error: error,
					message: "That booking was not found, please create one first!",
				});
			} else {
				return res.status(200).json({
					status: 200,
					data: data,
				});
			}
		}
	);
});

// router.delete('/:id', jwtCheck, (req, res) => {
//     const jwtDecode = require("jwt-decode");
//     const token = jwtDecode(req.headers.authorization)
//     const tokenPayload = jwtDecode(token).id; // "123456789"
// })

module.exports = router;
