const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = require("./config/db");

// Connect to db
db.connect(function (err) {
  if (err) throw err;
  console.log("Database connected.");
});

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/users"));

app.get("/display", (req, res) => {
  db.query("SELECT * FROM Vehicles", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/addvehicle", (req, res) => {
  const owner_id = req.body.owner_id;
  const model = req.body.model;
  const licensePlate = req.body.licensePlate;
  const state = req.body.state;
  const mileage = req.body.mileage;
  const dailyPrice = req.body.dailyPrice;
  const location = req.body.location;

  db.query(
    "INSERT INTO vehicles (owner_id, model, licensePlate, state, mileage, dailyPrice, location) VALUES (?, ?, ?, ?, ?, ?, ?, ?);",
    [owner_id, model, licensePlate, state, mileage, dailyPrice, location],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Server is running");
});
