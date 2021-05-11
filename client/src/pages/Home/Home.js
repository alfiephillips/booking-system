import './Home.css';
import { useAuth0 } from "@auth0/auth0-react";


function Home(){
    return (
        <div>
            <nav>
            <ul>
                <li className="active"><a href="/">Home</a></li>
                <li><a onClick={() => loginWithRedirect()} href='/'>Login</a></li>
            </ul>
            </nav>
        </div>
    )
};


export default Home;