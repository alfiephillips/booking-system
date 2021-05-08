import "./Login.css"
import {useState} from "react";
import Axios from "axios";


function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    const processUser = async () => {

        Axios.post('http://localhost:3001/auth/login', {
            email: email,
            password: password
          })
          .then(function (response) {
              console.log(response);
          })
          .catch(function (error) {
              console.log(error);
              alert("There has been an error!");
          })
    };

    return(
        <div className="register-box">
            <form method="POST">
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
            <button onClick={processUser}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign in
            </button>
        </form>
        </div>
    )
}

export default Login;
