import './Booking.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import JSONPretty from 'react-json-pretty';

function Booking(){
    const { user } = useAuth0();
    if (user === null){
        console.log("Leo");
    }
    console.log(user);

    return(
        <div id = 'container'>
            
            <JSONPretty data={user} />
        </div>
    )
    }



export default withAuthenticationRequired(Booking, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
    });