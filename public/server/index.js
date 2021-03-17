const express = require('express');
const app = express();

const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dharun@123',
    database: 'social_media_new',
});

app.get('/register', (req, res) => {
    db.query("INSERT INTO users (username, password) VALUES ('Maria', 'legend@2002')",
    (errors, results) => {
        console.log(errors);
        res.send(results)
    }
    )
})

app.listen(3001, (req, res) => {
    console.log("Server is running...");
})