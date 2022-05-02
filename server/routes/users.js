// routes/users.js -- Handles registration of users

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const db = require("../config/db");

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post("/", async (req, res) => {
  const {
    user_name,
    first_name,
    last_name,
    password,
    email,
    phone,
    user_type,
  } = req.body;

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
        "INSERT INTO User(user_name, first_name, last_name, password, email, phone, user_type) VALUES(?, ?, ?, ?, ?, ?, ?);",
        [
          user_name,
          first_name,
          last_name,
          saltedPassword,
          email,
          phone,
          "Renter",
        ],
        (err, result) => {
          if (err) {
            return res.status(400).send({ msg: err });
          }

          // Generate login token on register
          const user_id = result.insertId;
          const payload = {
            user: {
              user_id,
            },
          };

          jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
            if (err) throw err;
            res.json({ token });
          });
        }
      );
    }
  );
});

module.exports = router;
