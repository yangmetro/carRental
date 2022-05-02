import React from "react";
import "./App.css";
import Navbar from "../Navbar/Navbar";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Display from "../Display/Display.js";
import AddVehicle from "../AddVehicle/AddVehicle.js";
import RemoveVehicle from "../RemoveVehicle/RemoveVehicle.js";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import AuthState from "../../context/auth/AuthState";

function App() {
  const [user_id, setUser] = useState("");
  return (
    <AuthState>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            setUser1={setUser}
            exact
            path="/register"
            element={<Register />}
          />
          <Route user_id={user_id} exact path="/login" element={<Login />} />
          <Route
            user_id={user_id}
            exact
            path="/display"
            element={<Display />}
          />
          <Route
            user_id={user_id}
            exact
            path="/addvehicle"
            element={<AddVehicle />}
          />
          <Route
            user_id={user_id}
            exact
            path="/removevehicle"
            element={<RemoveVehicle />}
          />
        </Routes>
      </div>
    </AuthState>
  );
}

export default App;
