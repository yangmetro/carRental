import React from "react";
import './Display.css';
import Axios from 'axios';
import {useState} from 'react';

const Display = ({
    user_id
}) => {
    const [availableCars, setAvailableCars] = useState([]);
    const [userId, setUserID] = useState(138);
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
    
    const rentCars = (val) => {
        const date = new Date();
        Axios.post('http://localhost:3001/rentCars1', {
            renter_id: userId,
            vehicle_id: val.vehicle_id,
            owner_id: val.user_id,
            start_date: date,
            miles: val.mileage
        }).then((response) => {
            console.log(response);
        });
        Axios.post('http://localhost:3001/rentCars2', {
            vehicle_id: val.vehicle_id,
        }).then((response) => {
            console.log(response);
        });
        //console.log(val.vehicle_id);
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
                            <button className='rentCar' onClick={() => rentCars(val)}>
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