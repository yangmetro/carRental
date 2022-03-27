const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const auth = require("../middleware/auth");
const db = require("../config/db");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", async (req, res) => {
  const { user_name, password, email, phone, user_type } = req.body;

  // Check if user already exists

  db.query(
    "SELECT * FROM User WHERE user_name = ?;",
    [user_name],
    async (err, result) => {
      if (err) throw err;

      if (result.length > 0) {
        return res.status(400).json({ msg: "User already exists" });
      }

      // Encrypt password
      console.log(password);

      const salt = await bcrypt.genSalt(10);
      const saltedPassword = await bcrypt.hash(password, salt);

      console.log(saltedPassword);

      // Insert user
      db.query(
        "INSERT INTO User(user_name, password, email, phone, user_type) VALUES(?, ?, ?, ?, ?);",
        [user_name, saltedPassword, email, phone, user_type],
        (err, result) => {
          if (err) {
            return res.status(400).send({ msg: err });
          }

          return res.status(201).send({ msg: "Registered" });
        }
      );
    }
  );
});

module.exports = router;
