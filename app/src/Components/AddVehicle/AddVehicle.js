import React from "react";
import './AddVehicle.css';
import Axios from 'axios';
import {useState} from 'react';

function AddVehicle() {
    const [availableCars, setAvailableCars] = useState([]);
    const [model, setModel] = useState([]);
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
            <input 
                class='modelInput'
                name='model'
                type='text'
                
                placeholder='Enter Car model'
                onChange={(event) => {
                    setModel(event.target.value)
                }}
            />
        </div>
    )
};

export default AddVehicle;