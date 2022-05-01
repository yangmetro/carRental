import React from "react";
import "./App.css";
import Header from "../Header/Header.js";
import Register from "../Register/Register.js";
import Login from "../Login/Login.js";
import Display from "../Display/Display.js";
import AddVehicle from "../AddVehicle/AddVehicle.js";
import RemoveVehicle from "../RemoveVehicle/RemoveVehicle.js";
import { Routes, Route } from "react-router-dom";
import ReturnVehicle from "../ReturnVehicle/ReturnVehicle";
import {useState} from 'react';
import OwnedVehicles from "../ownedVehicles/ownedVehicles.js";

function App() {
  const [user_id, setUser] = useState("");
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route setUser1={setUser} exact path={process.env.PUBLIC_URL + '/register'} element={<Register />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/login'} element={<Login />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/display'} element={<Display />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/addVehicle'} element={<AddVehicle />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/removevehicle'} element={<RemoveVehicle />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/returnvehicle'} element={<ReturnVehicle />} />
        <Route user_id={user_id} exact path={process.env.PUBLIC_URL + '/ownedvehicle'} element={<OwnedVehicles />} />
      </Routes>
    </div>
  );
}

export default App;
