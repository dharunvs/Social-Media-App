import React, { useState } from 'react';
import './Register.css';
import Axios from 'axios';

function Register() {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");
    
    const register = () => {
        Axios.post("http://localhost:3001/user/register", {username: Username, password: Password}).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="Register">
            <div className="RegisterForm">
                <h2>Registration</h2>
                <input
                    type="text"
                    placeholder='Username'
                    onChange={(event) => {
                        setUsername(event.target.value);
                }}/>
                <input
                    type="password"
                    placeholder='Password'
                    onChange={(event) => {
                        setPassword(event.target.value);
                }}/>
                <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default Register
