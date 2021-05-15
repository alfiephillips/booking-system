const express = require("express");
const request = require("supertest");
let chai = require("chai");
let expect = require("chai").expect;
let should = require("chai").should();
let chaiHttp = require("chai-http");
let jwtCheck = require("../middleware/jwt");
let dotenv = require("dotenv").config({
	path: "./.env",
});

chai.use(chaiHttp);

function createApp() {
	app = express();
	app.route("/").get(function (req, res) {
		return res.json({ goodCall: true });
	});

	let bookings = express.Router();
	bookings.use(jwtCheck);
	bookings.route("/bookings", jwtCheck).get(function (req, res) {
		return res.json({ goodCall: true });
	});

	app.use(bookings);

	return app;
}

describe("The Booking System API", function () {
	let app;

	before(function (done) {
		app = createApp();
		app.listen(function (err) {
			if (err) {
				return done(err);
			}
			done();
		});
	});
	it("should send back a JSON object with goodCall set to true", function (done) {
		request(app)
			.get("/")
			.set("Content-Type", "application/json")
			.expect("Content-Type", /json/)
			.expect(200, function (err, res) {
				if (err) {
					return done(err);
				}
				callStatus = res.body.goodCall;
				expect(callStatus).to.equal(true);
				// Done
				done();
			});
	});

	it("should send an error without JWT authentication", function (done) {
		request(app)
			.get("/bookings")
			.end((err, res) => {
				res.should.have.status(401);
				done();
			});
	});
	it("should send a valid response with JWT authentication", function (done) {
		request(app)
			.get("/bookings")
			.set("authorization", process.env.TOKEN)
			.end((err, res) => {
				res.should.have.status(200);
				done();
			});
	});
});
