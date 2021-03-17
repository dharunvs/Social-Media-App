const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dharun@123',
    database: 'social_media_new',
});

module.exports = db;