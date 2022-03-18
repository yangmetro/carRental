import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Display from '../Display/Display.js';
import AddVehicle from '../AddVehicle/AddVehicle.js';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/display' element={<Display />} />
        <Route exact path='/addvehicle' element={<AddVehicle />} />
      </Routes>
      
    </div>
  );
}

export default App;
