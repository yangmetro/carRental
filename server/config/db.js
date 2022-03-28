const mysql = require("mysql");

const db = mysql.createConnection({
  host: "carrental.ccvg8mvh0pfx.us-east-2.rds.amazonaws.com",
  port: "3306",
  database: "carRental",
  user: "admin",
  password: "cs348carRental",
});

module.exports = db;
