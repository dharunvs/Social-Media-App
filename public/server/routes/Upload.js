const express = require("express");
const router = express.Router();

const db = require("../config/db");

router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const image = req.body.image;

  db.query(
    "INSERT INTO uploads (title, description, image) VALUES (?, ?, ?)",
    [title, description, image],
    (errors, results) => {
      console.log(errors);
      res.send(results);
    }
  );
});

module.exports = router;
