import "./Room.css";
import { Component } from "react";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Room(){
    const user = useAuth0();

    return (
        <div className = "container">
            <div id = "timeContainer">
                <button id = "timeButton">Registration</button>
                <button id = "timeButton">Period 1</button>
                <button id = "timeButton">Period 2</button>
                <button id = "timeButton">Study 1</button>
                <button id = "timeButton">Study 2</button>
                <button id = "timeButton">Period 3</button>
                <button id = "timeButton">Period 4</button>
            </div>
        </div>
    )
}

export default withAuthenticationRequired(Room, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Loading...</div>,
});
