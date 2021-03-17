import React, {useState} from 'react';
import './Login.css';
import Axios from 'axios';

function Login() {

    const [Username, setUsername] = useState("");
    const [Password, setPassword] = useState("");

    const login = () => {
        Axios.post("http://localhost:3001/user/login", {username: Username, password:Password}).then((response) => {
            console.log(response)
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
            </div>
        </div>
    )
}

export default Login
