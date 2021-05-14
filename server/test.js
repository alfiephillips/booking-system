const axios = require("axios").default;

let options = {
	method: "POST",
	url: "http://localhost:3000/bookings/create",
	headers: {
		authorization:
			"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjJBUjZLOXh2ZzBSRlQyaTMyTU1MZyJ9.eyJpc3MiOiJodHRwczovL2Jvb2tpbmctc3lzLmV1LmF1dGgwLmNvbS8iLCJzdWIiOiI1TThUcXR0QVhVV2Y4N2JTWGYzUDBBSDdXRWJMc1FOd0BjbGllbnRzIiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWF0IjoxNjIwNjg1MDU3LCJleHAiOjE2MjA3NzE0NTcsImF6cCI6IjVNOFRxdHRBWFVXZjg3YlNYZjNQMEFIN1dFYkxzUU53IiwiZ3R5IjoiY2xpZW50LWNyZWRlbnRpYWxzIn0.FBNx1ntUd6oY7zg202XT-S2A0XIZbd2y_Nsrc67-BX5IOnMp67arMdCRkCbUrNH9-ZOGOHYd8UeDOf0qPuGlo5qeaqF4xrn0ztF8ngYnpUQENAUjMzM6IC7WTHXjOuVWX9DcMXzl_tQZJKqwr44MKUc4yeOfu4-0X3V9pWr_flMYMHtQ-QdvcBqsEyV0l5pBj9IhH76uEYWOKYPue4EQYTLWrJRzk3g3dRzRP_b1SJNU6JM8j8ONKEbVpRJqnq-mHJosmNGn-fnB2p-B7LqUPu57tiYt9Tm8FBp0diXTUQcK9x9BekoVUOLZAQLn2Jp3bPpqWaj8wwO-cBytIiNe6w",
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
