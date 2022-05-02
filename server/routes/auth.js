// routes/auth.js -- Handles logging in of user

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const db = require("../config/db");

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get("/", auth, (req, res) => {
  db.query(
    "SELECT user_id, user_name, email, phone, user_type FROM User WHERE user_id = ?",
    [req.user.user_id],
    (err, result) => {
      if (err) throw err;

      const resultObj = JSON.stringify(result);
      console.log(resultObj);

      const { user_id, user_name, email, phone, user_type } = result[0];

      const user = {
        user_id,
        user_name,
        email,
        phone,
        user_type,
      };

      res.json(user);
    }
  );
});

// @route   GET api/auth
// @desc    Auth user and get token
// @access  Public
router.post("/", async (req, res) => {
  const { user_name, password } = req.body;

  console.log(user_name);
  console.log(password);

  db.query(
    "SELECT * FROM User where user_name = ?",
    [user_name],
    async (err, result) => {
      if (err) throw err;

      // Check if username exists
      if (result.length != 1) {
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Compare password
      console.log(password);
      console.log(result[0].password);

      const isMatch = await bcrypt.compare(password, result[0].password);
      if (!isMatch) {
        console.log("No match");
        return res.status(400).json({ msg: "Invalid credentials" });
      }

      // Create payload based on user_id
      console.log(`User_id: ${result[0].user_id}`);

      const payload = {
        user: {
          user_id: result[0].user_id,
        },
      };

      // Generate token for authorization
      jwt.sign(payload, "secret", { expiresIn: 360000 }, (err, token) => {
        if (err) throw err;
        res.json({ token });
      });
    }
  );
});

module.exports = router;
