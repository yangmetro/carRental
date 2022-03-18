import React from "react";
import './Display.css';
import Axios from 'axios';
import {useState} from 'react';

function Display() {
    const [availableCars, setAvailableCars] = useState([]);
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
    return (
        <div>
            <button className='showCars' onClick={getCars}>
                Show Cars
            </button>
            <div className='carList'>
                {availableCars.map((val, key) => {
                    return (
                        <div className='car' key={val.vehicle_id}>
                            <h1>{val.state + " " + val.license_plate}</h1>
                        </div>  
                    );
                })}
            </div>
        </div>
    )
};

export default Display;