const axios = require("axios").default;

let options = {
	method: "POST",
	url: "http://localhost:3000/bookings/create",
	headers: {
		authorization:
			"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJBUjZLOXh2ZzBSRlQyaTMyTU1MZyJ9.eyJpc3MiOiJodHRwczovL2Jvb2tpbmctc3lzLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiI1TThUcXR0QVhVV2Y4N2JTWGYzUDBBSDdXRWJMc1FOd0BjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWF0IjoxNjIxMDI5MjY0LCJleHAiOjE2MjExMTU2NjQsImF6cCI6IjVNOFRxdHRBWFVXZjg3YlNYZjNQMEFIN1dFYkxzUU53IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.T-cpCvf8rE2TYlyg3RDR0PAO1W5FzArkhB4CyMpzkb7CrkZIRhn0YzguyJvBN_ey3alMEGApA8DLpAcTLlgl87-TmCXTGItjJ1A3Gu0jZKkviqnHNFpy46AB8oyFrmJ1Qc_6Uc8uNKi4ng7yp2KtRfHYRaiAlmPe9BgniDXsQ0syOsSF_QvURJ3DqXWCjcwWNq-Mb-L4XNPnBsc1cggJpbcol4u15XJjrv4cTxU6T6UXKGwhZvj8mdm-WRX03XOZ5OuWQh0U2NKWYW4lpMFXTD9x_q29kAi2fx-frPYJOYJYWgRYdwVkaW6bqWDFytuvlQY_Aema8h6hr9vBFY5znw",
	},
	data: {
		room_name: "E2",
		author: "Alfie Poopy Pants",
		class: "10X2",
		start_time: 138847343,
		end_time: 34343342,
	},
};

axios
	.request(options)
	.then(function (response) {
		console.log(response);
	})
	.catch(function (error) {
		console.log(error);
	});
