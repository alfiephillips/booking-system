import './Booking.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

function Booking(){
    const { user } = useAuth0();
    
    return(
        <div id = 'container'>
            <img src ={user.picture}></img>
            <h1>Hello {user.name}</h1>
            <h2></h2>
        </div>
    )
    }



export default withAuthenticationRequired(Booking, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
    });