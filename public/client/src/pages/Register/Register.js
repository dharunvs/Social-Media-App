import React from 'react'
import './Register.css'

function Register() {
    return (
        <div className="Register">
            <div className="RegisterForm">
                <input type="text" placeholder='Username'/>
                <input type="password" placeholder='Password'/>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register
