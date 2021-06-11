import "./Room.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Room(id) {
	const { user, getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
	// const {redirectUri, setRedirectUri} = useState("/room");

	console.log(user);
	const callApi = async () => {
		try {
			const token = await getAccessTokenSilently({
				audience: `http://localhost:3000`,
			});
			const response = await fetch(`http://localhost:3000/bookings`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const responseData = await response.json();
			console.log(responseData);

			return responseData;
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div>
			<div id='timeContainer'>
				<button id='timeButton' onClick={callApi}>
					Bookings
				</button>
				<button id='timeButton'>Registration</button>
				<button id='timeButton'>Period 1</button>
				<button id='timeButton'>Period 2</button>
				<button id='timeButton'>Study 1</button>
				<button id='timeButton'>Study 2</button>
				<button id='timeButton'>Period 3</button>
				<button id='timeButton'>Period 4</button>
			</div>
		</div>
	);
}

export default withAuthenticationRequired(Room, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Loading...</div>,
});
