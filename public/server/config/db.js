const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost:3306",
  user: "root",
  password: "Dharun@123",
  database: "social_media_app",
});

module.exports = db;
