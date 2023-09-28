const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM categories", (error, response) => {
    if (error) {
      return res.status(500).json(error);
    }

    return res.status(200).json(response.rows);
  });
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (name.length < 3) {
    return res
      .status(400)
      .json({ error: "Name should have more than 3 characters" });
  }

  const text = "INSERT INTO categories(name) VALUES($1) RETURNING *";
  const values = [name];

  db.query(text, values, (error, response) => {
    if (error) {
      return res.status(500).json(error);
    }
    return res.status(200).json(response.rows);
  });
});

module.exports = router;
