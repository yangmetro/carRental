import React from "react";
import "./RemoveVehicle.css";
import { useState } from "react";
import Axios from "axios";

function RemoveVehicle() {
  const [licensePlate, setPlate] = useState("");
  const [owner_id, setOwner] = useState(123);

  const handlePlate = (event) => setPlate(event.target.value);

  const removeVehicle = () => {
    Axios.post("http://localhost:3001/removevehicle", {
      owner_id: owner_id,
      licensePlate: licensePlate,
    }).then((response) => {
      console.log(response);
    });
    window.location.href = "http://localhost:3000/carRental/ownedvehicles";
  };

  return (
    <div>
      <input
        className="input"
        name="licensePlate"
        type="text"
        placeholder="Enter your license plate number"
        onChange={handlePlate}
      />
      <div>
        <button className="submitButton" onClick={removeVehicle}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default RemoveVehicle;
