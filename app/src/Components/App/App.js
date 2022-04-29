import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Display from "../Display/Display.js";
import AddVehicle from "../AddVehicle/AddVehicle.js";
import RemoveVehicle from "../RemoveVehicle/RemoveVehicle.js";
import { Routes, Route } from "react-router-dom";
import {useState} from 'react';

function App() {
  const [user_id, setUser] = useState();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route user_id1={user_id} setUser1={setUser} exact path="/register" element={<Register />} />
        <Route user_id={user_id} exact path="/login" element={<Login />} />
        <Route user_id={user_id} exact path="/display" element={<Display />} />
        <Route user_id={user_id} exact path="/addvehicle" element={<AddVehicle />} />
        <Route user_id={user_id} exact path="/removevehicle" element={<RemoveVehicle />} />
      </Routes>
    </div>
  );
}

export default App;
