import React, { useEffect } from "react";
import './ReturnVehicle.css';
import {useState} from 'react';
import Axios from "axios";

function ReturnVehicle() {
    const [rentedCars, setRentedCars] = useState([]);
    const [user_id, setUserId] = useState(136);
    
    const getRented = () => {
        Axios.get('http://localhost:3001/displayRented', {
            user_id:user_id
        }).then((response) => {
            if (response.data.length === 0) {
                console.log("Response is undefined");
                console.log(response.data);
            } else {
                setRentedCars(response.data);
            }
        });
    };

    useEffect(() => {
        console.log(user_id);
        Axios.post('http://localhost:3001/displayRented', {
            user_id:user_id
        }).then((response) => {
            if (response.data.length === 0) {
                console.log("Response is undefined");
                console.log(response.data);
            } else {
                setRentedCars(response.data);
            }
        });
    }, []);

    return (
        <div>
            <h1>Return Vehicle</h1>
            <div>
                {rentedCars.map((val, key) => {
                    return (
                        <div key={val.rental_id}>
                            <h1>{val.license_plate + " " + val.start_date}</h1>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default ReturnVehicle;