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

// @route   POST api/payments
// @desc    Add a new payment
// @access  Private
router.post("/", auth, async (req, res) => {
  const user_id = req.user.user_id;
  const { payment_name, payment_type, card_number, expiry_date } = req.body;

  if (!payment_type || !card_number || !expiry_date) {
    return res.status(400).json({ msg: "All fields required" });
  }

  db.query(
    "INSERT INTO Payments (user_id, payment_name, payment_type, card_number, expiry_date) VALUES (?, ?, ?, ?, ?);",
    [user_id, payment_name, payment_type, card_number, expiry_date],
    async (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }

      res.json(result.insertId);
    }
  );
});

// @route   PUT api/payments/:id
// @desc    Update a payment
// @access  Private
router.put("/:id", auth, async (req, res) => {
  const { payment_type, card_number, expiry_date } = req.body;

  db.query(
    "UPDATE Payments SET payment_type = ?, card_number = ?, expiry_date = ? WHERE payment_id = ? AND user_id = ?;",
    [payment_type, card_number, expiry_date, req.params.id, req.user.user_id],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }

      res.json(result);
    }
  );
});

// @route   DELETE api/payments/:id
// @desc    Delete a payment
// @acess   Private
router.delete("/:id", auth, async (req, res) => {
  db.query(
    "DELETE FROM Payments WHERE payment_id = ? AND user_id = ?",
    [req.params.id, req.user.user_id],
    (err, result) => {
      if (err) {
        console.error(err.message);
        return res.status(500).send("Server Error");
      }

      res.json(result);
    }
  );
});

module.exports = router;
