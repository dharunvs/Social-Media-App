import React from 'react';
import './Register.css';
import Axios from 'axios';

function Register() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const register = () => {
        Axios.post("http://localhost:3001/user/register")
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
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register
