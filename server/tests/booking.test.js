const axios = require("axios").default;
const dotenv = require("dotenv").config({
	path: "./.env",
});

let options = {
	method: "POST",
	url: "http://localhost:3000/bookings/create",
	headers: {
		authorization: process.env.TOKEN,
	},
	data: {
		room_name: "E2",
		author: "Alfie Poopy Pants",
		class: "10X2",
		start_time: 138847343,
		end_time: 34343342,
	},
};

function axiosRequest(options) {
	axios
		.request(options)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (err) {
			console.log(err);
		});
}

axiosRequest(options);
