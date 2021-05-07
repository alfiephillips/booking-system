import "./Login.css"
import {useState} from "react";
import Axios from "axios";

function Login() {

    const register = () => {
        Axios.post("http://localhost:3001/user/register", {
          username: username,
          password: password,
          cpassword: cpassword
        }).then((response) => {
          console.log(response);
        });
    };

    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");

    return(
        <div className="login">
            <form>
                <div className='user-box'>
                     <input type="text" name="username" onChange={(event) => {
                         setUsername(event.target.value);
                     }} required></input>
                     <label>Username</label>
                </div>
                <div className="user-box">
                     <input type="password" name="password" onChange={(event) => {
                         setPassword(event.target.value);
                     }} required></input>
                     <label>Password</label>
                </div>
                <div className="user-box">
                    <input type="password" name="confirm-password" onChange={(event) => {
                        setCpassword(event.target.value);
                    }} required></input>
                    <label>Confirm Password</label>
                </div>
                <button onClick={register}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Register
                </button>
            </form>
        </div>
    )
}

export default Login;
