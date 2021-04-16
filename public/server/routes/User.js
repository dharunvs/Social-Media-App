const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/register", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password],
    (errors, results) => {
      console.log(errors);
      res.send(results);
    }
  );
});

router.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ?",
    username,
    (errors, results) => {
      if (errors) {
        console.log(errors);
      }
      if (results.length > 0) {
        if (password == results[0].password) {
          res.json({ loggedIn: true, username: username });
        } else {
          res.json({ loggedIn: false, message: "Wrong password" });
        }
      } else {
        res.json({ loggedIn: false, message: "Invalid username" });
      }
    }
  );
});

module.exports = router;
