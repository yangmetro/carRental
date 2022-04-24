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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/display" element={<Display />} />
        <Route exact path="/addvehicle" element={<AddVehicle />} />
        <Route exact path="/removevehicle" element={<RemoveVehicle />} />
        <Route exact path="/returnvehicle" element={<ReturnVehicle/>}/>
      </Routes>
    </div>
  );
}

export default App;
