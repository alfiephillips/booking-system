import "./Room.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Room() {
	const { user, getAccessTokenWithPopup, getAccessTokenSilently } = useAuth0();
	// const {redirectUri, setRedirectUri} = useState("/room");

	const callApi = async () => {
		try {
			const token = await getAccessTokenSilently({
				audience: `http://localhost:3000`,
			});
			console.log(token);
			const response = await fetch(`http://localhost:3000/bookings`, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			const responseData = await response.json();
			console.log(responseData);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		// <div className='container'>
		// 	<div id='timeContainer'>
		// 		<button onClick={callApi} id='timeButton'>
		// 			Registration
		// 		</button>
		// 		<button id='timeButton'>Period 1</button>
		// 		<button id='timeButton'>Period 2</button>
		// 		<button id='timeButton'>Study 1</button>
		// 		<button id='timeButton'>Study 2</button>
		// 		<button id='timeButton'>Period 3</button>
		// 		<button id='timeButton'>Period 4</button>
		// 	</div>
		// </div>
		<div>
			<div className='button-container'>
				<button className='big-button'>Registration</button>
				<button className='big-button'>Period 1</button>
				<button className='big-button'>Period 2</button>
				<button className='big-button'>Study 1</button>
				<button className='big-button'>Study 2</button>
				<button className='big-button'>Period 3</button>
				<button className='big-button'>Period 4</button>
			</div>
		</div>
	);
}

export default withAuthenticationRequired(Room, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Loading...</div>,
});
