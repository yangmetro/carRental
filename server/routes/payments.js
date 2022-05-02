const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const db = require("../config/db");

// @route   GET api/payments
// @desc    Get all user's payments
// @access  Private
router.get("/", auth, (req, res) => {
  db.query(
    "SELECT * FROM Payments WHERE user_id = ?;",
    [req.user.user_id],
    (err, result) => {
      if (err) throw err;

      const payments = result;

      res.json(payments);
    }
  );
});

// @route   POST api/auth
// @desc    Add a new payment
// @access  Private
router.post("/", auth, async (req, res) => {
  const user_id = req.user.user_id;
  const { payment_type, card_number, expiry_date } = req.body;

  if (!payment_type || !card_number || !expiry_date) {
    return res.status(400).json({ msg: "All fields required" });
  }

  db.query(
    "INSERT INTO Payments (user_id, payment_type, card_number, expiry_date) VALUES (?, ?, ?, ?);",
    [user_id, payment_type, card_number, expiry_date],
    async (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }

      res.json(result.insertId);
    }
  );
});

module.exports = router;
