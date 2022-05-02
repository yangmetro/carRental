import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Display from "../Display/Display.js";
import AddVehicle from "../AddVehicle/AddVehicle.js";
import RemoveVehicle from "../RemoveVehicle/RemoveVehicle.js";
import Payments from "../Payments/Payments";
import { Routes, Route } from "react-router-dom";
import AuthState from "../../context/auth/AuthState";

function App() {
  return (
    <AuthState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/display" element={<Display />} />
          <Route exact path="/addvehicle" element={<AddVehicle />} />
          <Route exact path="/removevehicle" element={<RemoveVehicle />} />
          <Route exact path="/payments" element={<Payments />} />
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
