import "./Login.css"
import {useState} from "react";
import Axios from "axios";


function Login() {
    let [fname, setFname] = useState("");
    let [lname, setLname] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");


    const processUser = async () => {

        Axios.post('http://localhost:3001/auth/login', {
            fname: fname,
            lname: lname,
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

    return(
        <body>
        <div className="register-box">
            <form>
            <h2>Login</h2>
            <div className="user-box">
                <input type="text" name="fname" onChange={(event) => {
                    setFname(event.target.value);
                }} required></input>
                <label>First Name</label>
            </div>
            <div className="user-box">
                <input type="text" name="lname" onChange={(event) => {
                    setLname(event.target.value);
                }} required></input>
                <label>Last Name</label>
            </div>
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
        </body>
        
    )
}

export default Login;
