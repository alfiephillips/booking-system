import "./Login.css"
import {useState} from "react";
import Axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


function Login() {
    const { loginWithRedirect } = useAuth0();
    
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    // Axios.post('http://localhost:3000/auth/login', {
    //         email: "thealfiephillip@gmail.com",
    //         password: "password123",
    //         }).then((response) => {
    //             console.log(response)
    //             console.log(response.headers['set-cookie'])
    //         }).catch((error) => {
    //             console.log(error);
    //             });

    return (
        <div className="register-box">
            <button onClick={() => loginWithRedirect()}>Log In</button>
            <h2>Login</h2>
            <div className="user-box">
                 <input type="email" name="email" onChange={(event) => {
                         setEmail(event.target.value);
                     }} required></input>
                 <label>Email</label>
            </div>
            <div className="user-box">
                 <input type="password" name="password" onChange={(event) => {
                         setPassword(event.target.value);
                 }} required></input>
                 <label>Password</label>
            </div>
            <button onClick={() => {
                return new Promise((resolve, reject) => {
                    Axios.post('http://localhost:3000/auth/login', {
                    email: email,
                    password: password
                    }).then((response) => {
                        console.log(response)
                    }).catch((error) => {
                        console.log(error);
                })
            })}} />
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
        </div>
    )
}

export default Login;
