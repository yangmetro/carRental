import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import { useAuth, logout } from "../../context/auth/AuthState";

import "./Navbar.css";

const Navbar = () => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  const onLogout = () => {
    logout(authDispatch);
  };

  // Links that will be visible specifically if a user is logged in.
  const protectedLinks = (
    <Fragment>
      <li>
        <Link to="/returnvehicle">Return Vehicle</Link>
      </li>
      <li>
        <Link to="/addvehicle">Add Vehicle</Link>
      </li>
      <li>
        <Link to="/removevehicle">Remove Vehicle</Link>
      </li>
      <li>
        <Link to="/ownedvehicles">My Vehicles</Link>
      </li>
      <li>
        <Link to="/payments">Payments</Link>
      </li>
      <li>
        <Link onClick={onLogout} to="/login">
          Logout
        </Link>
      </li>
    </Fragment>
  );

  // Links that will be visible specifically when a user is not logged in.
  const publicLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div className="container">
        <h1 className="title">Car Rental</h1>
        <ul>
          <li>
            <Link to="/display">Browse Vehicles</Link>
          </li>
          {isAuthenticated ? protectedLinks : publicLinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
