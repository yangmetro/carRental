import React from "react";
import './Display.css';
import Axios from 'axios';
import {useState} from 'react';

function Display() {
    const [availableCars, setAvailableCars] = useState([]);
    //const [selectedCar, setSelectedCar] = useState();
    const getCars = () => {
        Axios.get('http://localhost:3001/display').then((response) => {
            if (response.data.length === 0) {
                console.log("Response is undefined");
                console.log(response.data);
            } else {
                setAvailableCars(response.data);
            }
        });
    };
    
    const rentCars = (vehicle_id) => {
        //Axios.post('http://localhost:3001/rentCars');
        console.log(vehicle_id);
    };
    
    return (
        <div>
            <button className='showCars' onClick={getCars}>
                Show Cars
            </button>
            <div className='carList'>
                {availableCars.map((val, key) => {
                    return (
                        <div className='car' key={val.vehicle_id}>
                            <h1>{"Vehicle: " + val.vehicle_id}</h1>
                            <h1>{"Daily Cost : " + val.daily_cost}</h1>
                            <button className='rentCar' onClick={() => rentCars(val.vehicle_id)}>
                                Rent
                            </button>
                        </div>  
                    );
                })}
            </div>
        </div>
    )
};

export default Display;