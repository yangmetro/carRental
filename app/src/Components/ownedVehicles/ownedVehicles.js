import React from "react";
import './ownedVehicles.css';
import Axios from 'axios';
import {useState} from 'react';

const OwnedVehicles = ({
    user_id
}) => {
    const [availableCars, setAvailableCars] = useState([]);
    const [userId, setUserID] = useState(123);

    const getCars = () => {
        Axios.post('http://localhost:3001/ownedVehicles', {
            user_id:userId
        }).then((response) => {
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
                            <h1>{"Vehicle: " + val.vehicle_id}</h1>
                            <h1>{"Daily Cost : " + val.daily_cost}</h1>
                        </div>  
                    );
                })} 
            </div>
        </div>
    )
};

export default OwnedVehicles;