import React, { useEffect } from "react";
import './ReturnVehicle.css';
import {useState} from 'react';
import Axios from "axios";
import moment from 'moment';

function ReturnVehicle() {
    const [rentedCars, setRentedCars] = useState([]);
    const [user_id, setUserId] = useState(138);

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

    const returnVehicle = (rental_id) => {
        console.log("Rental_id: " + rental_id);
        const end_date = new Date();
        console.log("end_date: " + end_date);
        Axios.post('http://localhost:3001/return', {
            end_date:end_date,
            rental_id:rental_id
        }).then((response) => {
            
        });
    };

    return (
        <div>
            <h1>Return Vehicle</h1>
            <div className='rentalList'>
                {rentedCars.map((val, key) => {
                    return (
                        <div className='rentals' key={val.rental_id}>
                            <h1>{"Vehicle: " + val.license_plate}</h1> 
                            <h1>{"Rented Since: " + moment(val.start_date).format("MMMM Do YYYY")}</h1>
                            <button onClick={()=>returnVehicle(val.rental_id)}>Return</button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
};

export default ReturnVehicle;