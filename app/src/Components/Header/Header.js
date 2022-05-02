import React from "react";
import "./Header.css";

function Header({ open, set }) {
  return (
    <div className="topbar">
      <div className="left">
        <a href="/" className="title">
          Car Rental
        </a>
      </div>
      <div className="right">
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/register'} className="link2">
            Register
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/login'} className="link2">
            Login
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/display'} className="link2">
            Display
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/addvehicle'} className="link2">
            Add Vehicle
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/removevehicle'} className="link2">
            Remove Vehicle
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/returnvehicle'} className="link2">
            Return Vehicle
          </a>
        </div>
        <div>
          <a href={process.env.PUBLIC_URL + '/carRental/ownedvehicle'} className="link2">
            View Owned Vehicles
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
