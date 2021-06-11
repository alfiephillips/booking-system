const express = require("express");
const sqlite = require("sqlite3");
const db = require("../config/db.js");
const router = express.Router();
const jwtCheck = require("../middleware/jwt.js");
const { auth } = require("express-openid-connect");
const crypto = require("crypto");

router.use(jwtCheck);

router.get("/", jwtCheck, (req, res) => {
	db.all(`SELECT * FROM Rooms`, (error, data) => {
		if (error) {
			return res.status(400).json({
				status: 401,
				error: error,
				message: "There has been error finding any rooms!",
			});
		} else {
			return res.status(201).json({
				status: 201,
				data: data,
				message: `${data.length} rooms.`,
			});
		}
	});
});

module.exports = router;
