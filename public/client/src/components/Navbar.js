import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {

    const [Loggedin, setLoggedIn] = useState(false);
    
    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"))
    }, [localStorage.getItem("loggedIn")])

    return (
        <div className="Navbar">
            <a href="/">Home</a>

            {!Loggedin ?(
                <>
                <a href="/register">Register</a>
                <a href="/login">Log in</a>
                </>
            ) : (
                <>
                <a href="/profile">Profile</a>
                </>
            )}
            
        </div>  
    )
}

export default Navbar
