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

app.listen(3001, () => {
    console.log("Server is running");
});