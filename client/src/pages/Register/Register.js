import './Register.css';
import {useState} from "react";
import Axios from "axios";

function Register() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");


    const register = async () => {

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
                <button id = 'register' onClick={register}>
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

export default Register;