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
          <a href="/register" className="link2">
            Register
          </a>
        </div>
        <div>
          <a href="/login" className="link2">
            Login
          </a>
        </div>
        <div>
          <a href="/display" className="link2">
            Display
          </a>
        </div>
        <div>
          <a href="/addvehicle" className="link2">
            Add Vehicle
          </a>
        </div>
        <div>
          <a href="/removevehicle" className="link2">
            Remove Vehicle
          </a>
        </div>
        <div>
          <a href="/returnvehicle" className="link2">
            Return Vehicle
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
