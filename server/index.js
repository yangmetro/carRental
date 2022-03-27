const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'carrental.ccvg8mvh0pfx.us-east-2.rds.amazonaws.com',
    port: '3306',
    database: 'carRental',
    user: 'admin',
    password: 'cs348carRental',
});


app.get('/display', (req, res) => {
    db.query(
        "SELECT * FROM Vehicles",
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.post('/addvehicle', (req, res) => {
    const owner_id = req.body.owner_id;
    const model = req.body.model;
    const licensePlate = req.body.licensePlate;
    const state = req.body.state;
    const mileage = req.body.mileage;
    const dailyPrice = req.body.dailyPrice;
    const location = req.body.location;
    console.log("Inserting");
    db.query(
        "INSERT INTO Vehicles (user_id, model, license_plate, state, mileage, daily_cost, location) VALUES (?, ?, ?, ?, ?, ?, ?);",
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

app.post('/removevehicle', (req, res) => {
    const owner_id = req.body.owner_id;
    const licensePlate = req.body.licensePlate;
    db.query(
        "DELETE FROM Vehicles WHERE user_id=? AND license_plate=?;",
        [owner_id, licensePlate],
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