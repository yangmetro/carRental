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
app.use("/api/auth", require("./routes/auth"));

app.get("/display", (req, res) => {
  db.query("SELECT * FROM Vehicles WHERE available = 0", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/addvehicle", (req, res) => {
  const user_id = req.body.user_id;
  const model = req.body.model;
  const licensePlate = req.body.licensePlate;
  const state = req.body.state;
  const mileage = req.body.mileage;
  const dailyPrice = req.body.dailyPrice;
  const location = req.body.location;
  const status = "Inactive";
  const available = 0;
  console.log("Inserting");
  db.query(
    "INSERT INTO Vehicles (user_id, model, license_plate, state, mileage, daily_cost, location, status, available) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);",
    [
      user_id,
      model,
      licensePlate,
      state,
      mileage,
      dailyPrice,
      location,
      status,
      available,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/removevehicle", (req, res) => {
  const user_id = req.body.user_id;
  const licensePlate = req.body.licensePlate;
  db.query(
    "DELETE FROM Vehicles WHERE user_id=? AND license_plate=?;",
    [user_id, licensePlate],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.post('/rentCars', (req,res) => {
  const owner_id = req.body.owner_id;
  const renter_id = req.body.renter_id;
  const vehicle_id = req.body.vehicle_id;
  const start_date = req.body.start_date;
  const miles = req.body.miles;
  db.query(
  "INSERT INTO Rentals (owner_id, vehicle_id, renter_id, miles, start_date) VALUES (?, ?, ?, ?, ?);",
  [
    owner_id,
    vehicle_id,
    renter_id,
    miles,
    start_date
  ],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
  
  db.query(
    "UPDATE Vehicles SET status = 'active', available = 1 WHERE vehicle_id = ?;",
    [
      vehicle_id
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
    
});

app.post("/displayRented", (req, res) => {
  const user_id = req.body.user_id;
  db.query(
    "SELECT * FROM Rentals r LEFT JOIN Vehicles v ON v.vehicle_id=r.vehicle_id WHERE r.renter_id = ? AND r.end_date IS NULL;",
    [user_id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/return", (req, res) => {
  const end_date = req.body.end_date;
  const rental_id = req.body.rental_id;
  db.query("CALL finalizeRentalCost(?, ?);",
  [end_date, rental_id],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/review", (req, res) => {
  const review = req.body.review;
  const vehicle_id = req.body.vehicle_id;
  const rating = req.body.rating;
  const user_id = req.body.user_id;

  db.query(
  "INSERT INTO Reviews (vehicle_id, user_id, rating, review) VALUES (?, ?, ?, ?);",
  [
    vehicle_id,
    user_id,
    rating,
    review
  ],
  (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
})

app.listen(3001, () => {
  console.log("Server is running");
});
