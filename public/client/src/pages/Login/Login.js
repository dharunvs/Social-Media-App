import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios';

function Login() {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const [ErrorMessage, setErrorMessage] = useState("");
    const login = () => {
        Axios.post("http://localhost:3001/user/login", {username: Username, password:Password}).then((response) => {
            if (response.data.loggedIn){
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("username", response.data.username) 
            } else {
                setErrorMessage(response.data.message)
            }
        })
    }
    return (
        <div className='Login'>
            <div className="LoginForm">
                <h2>Login</h2>
                <input
                    type="text"
                    placeholder='Username'
                    onChange={(event) => {
                        setUsername(event.target.value)
                    }}
                />
                <input
                    type="password"
                    placeholder='Password'
                    onChange={(event) => {
                        setPassword(event.target.value)
                    }}
                />
                <button onClick={login}>Login</button>
                <h2 style={{color: "red"}}>{ErrorMessage}</h2>
            </div>
        </div>
    )
}

export default Login
