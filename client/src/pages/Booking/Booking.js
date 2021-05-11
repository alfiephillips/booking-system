import "./Booking.css";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';
import Calendar from '../../components/Calendar';
function Booking(){
    const { user } = useAuth0();

    const getButtons = function() {
        const array = ["Art Laptops", "Ipads", "IT Laptops", "Library Laptops", "CR1", "CR2", "CR3", "CR4", "Hall", "Fitness Suites", "Gym", "Social Space"];
        return array.map((num) => {
            return <button>{num}</button>
        })
    }
    
    return(
        <div id = 'container'>
            <h1>Hello {user.name}</h1>
            <h2></h2>
            <div classname = "class-btns">
                {getButtons()}
            </div>
        </div>
    )
    }

	const getButtons = () => {
		const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		return array.map((num) => {
			return <button>{num}</button>;
		});
	};

	return (
		<div id='container'>
			<h1>Hello {user.name}</h1>
			<h2></h2>
			{this.getButtons()}
		</div>
	);
    }

export default withAuthenticationRequired(Booking, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
