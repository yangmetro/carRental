import React, { useEffect } from "react";
import "./ReturnVehicle.css";
import { useState } from "react";
import Axios from "axios";
import moment from "moment";

function ReturnVehicle() {
  const [rentedCars, setRentedCars] = useState([]);
  const [returning, setReturning] = useState(false); //true if user has just returned a car
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(5);
  const [vehicle_id, setVehicleID] = useState(0);

  useEffect(() => {
    Axios.post("http://localhost:3001/displayRented", {}).then((response) => {
      if (response.data.length === 0) {
        console.log("Response is undefined");
        console.log(response.data);
      } else {
        setRentedCars(response.data);
      }
    });
  }, []);

  const returnVehicle = (rental_id, vehicle_id) => {
    console.log("Rental_id: " + rental_id);
    const end_date = new Date();
    console.log("end_date: " + end_date);
    Axios.post("http://localhost:3001/return", {
      end_date: end_date,
      rental_id: rental_id,
    }).then((response) => {
      setReturning(true);
      setVehicleID(vehicle_id);
    });
  };

  const submitReview = (e) => {
    e.preventDefault();
    console.log("submitting this review:", review);
    console.log("rating:", rating);
    Axios.post("http://localhost:3001/review", {
      review: review,
      rating: rating,
      vehicle_id: vehicle_id,
    });
    window.location.reload();
  };

  const backToReturns = () => {
    setReturning(false);
    window.location.reload(false);
  };

  return (
    <div>
      {returning && (
        <div>
          <h1>Thank you for renting the car</h1>
          <br />
          <h2>Please rate your review from 1-5</h2>
          <input
            type="text"
            pattern="[1-5]"
            value={rating}
            onChange={(e) =>
              setRating((v) => (e.target.validity.valid ? e.target.value : v))
            }
          />
          <h2>Please leave some feedback:</h2>
          <label>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
            ></textarea>
          </label>
          <button onClick={(e) => submitReview(e)}>submit</button>
          <button onClick={() => backToReturns()}>back to returns</button>
        </div>
      )}
      {!returning && (
        <div>
          <h1>Return Vehicle</h1>
          <div className="rentalList">
            {rentedCars.map((val, key) => {
              return (
                <div className="rentals" key={val.rental_id}>
                  <h1>{"Vehicle: " + val.vehicle_id}</h1>
                  <h1>
                    {"Rented Since: " +
                      moment(val.start_date).format("MMMM Do YYYY")}
                  </h1>
                  <button
                    onClick={() => returnVehicle(val.rental_id, val.vehicle_id)}
                  >
                    Return
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ReturnVehicle;
