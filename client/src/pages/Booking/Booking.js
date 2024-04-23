import "./Booking.css";
import { Component } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

class Section extends Component {
	render() {
		const getButtons = () => {
			let array = [
				"Art Laptops",
				"Ipads",
				"IT Laptops",
				"Library Laptops",
				"Chicken Noodles",
			];
			
			return array.map((item) => {
				return <a href={item}><button id='class-btn'>{item}</button></a>;
			});		
		};

		return (
			<div className='container'>
				<div id='btn-container'>{getButtons()}</div>
			</div>
		);
	}
}

function Booking() {
	const { user } = useAuth0();

	return (
		<div>
			<Section />
		</div>
	);
}

export default withAuthenticationRequired(Booking, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
