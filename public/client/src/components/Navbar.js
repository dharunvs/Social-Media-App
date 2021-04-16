import React, { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [Loggedin, setLoggedIn] = useState(true);

  useEffect(() => {
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, [localStorage.getItem("loggedIn")]);

  return (
    <div className="Navbar">
      <a href="/">Home</a>

      {Loggedin ? (
        <>
          <a href="/upload">Upload</a>
          <a href="/profile">Profile</a>
          <a href="/register">Register</a>
        </>
      ) : (
        <>
          <a href="/register">Register</a>
          <a href="/login">Log in</a>
        </>
      )}
    </div>
  );
}

export default Navbar;
