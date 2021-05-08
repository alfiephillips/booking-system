import "./Login.css"
import {useState} from "react";
import Axios from "axios";

function Login() {

    const register = () => {
        Axios.post('http://localhost:3001/auth/login', {
            email: email,
            password: password
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              alert(error);
          })
    };

    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return(
        <body>
        <div className="register-box">
            <form method="POST">
            <h2>Login</h2>
            <div className="user-box">
                 <input type="text" name="email" onChange={(event) => {
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
            <button onClick={register}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
            </button>
        </form>
        </div>
        </body>
        
    )
}

export default Login;
