const request = require("request");

const options = {
	method: "POST",
	url: "https://booking-sys.eu.auth0.com/oauth/token",
	headers: { "content-type": "application/json" },
	body: '{"client_id":"5M8TqttAXUWf87bSXf3P0AH7WEbLsQNw","client_secret":"myzl4TzEEVBvIX0z_zW63_tzycXGVrgv-uzEiAfRCabjfsfRfUjqUP8JkobaKp08","audience":"http://localhost:3000","grant_type":"client_credentials"}',
};

request(options, function (error, response, body) {
	if (error) throw new Error(error);

	console.log(body);
});
