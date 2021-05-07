import './Register.css';
import {useState} from "react";
import Axios from "axios";
import bcrypt from "bcrypt";

function Login() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");


    const register = async () => {
        if (!fname && lname && email && password && cpassword) {
            return false;
        }

        if (password !== cpassword) {
            return false;
        }
        
        const salt = await bcrypt.genSalt(10);

        try {
            password = await bcrypt.hash(password, salt);
            Axios.post("http://localhost:3001/user/register", {
                fname: fname,
                lname: lname,
                email: email,
                password: password
                }).then((response) => {
                console.log(response);
                });
        } catch (err) {
            console.log(err);
            alert("Error requesting API")
        }
    };

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