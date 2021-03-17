const express = require('express');
const router = express.Router();

const db = require('../config/db');

router.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username, password) VALUES (?, ?)", [username, password],
    (errors, results) => {
        console.log(errors);
        res.send(results)
    }
    )
})

router.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    res.send(username+" is logged in with password: "+password)
})

module.exports = router;