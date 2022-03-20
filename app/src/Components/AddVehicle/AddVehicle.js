import React from "react";
import './AddVehicle.css';
import Axios from 'axios';
import {useState} from 'react';

function AddVehicle() {
    const [model, setModel] = useState('');
    const [licensePlate, setPlate] = useState('');
    const [state, setState] = useState('');
    const [mileage, setMileage] = useState(0);
    const [dailyPrice, setPrice] = useState(0);
    const [location, setLocation] = useState('');


    const handleModel = event => setModel(event.target.value);
    const handlePlate = event => setPlate(event.target.value);
    const handleState = event => setState(event.target.value);
    const handleMileage = event => setMileage(event.target.value);
    const handlePrice = event => setPrice(event.target.value);
    const handleLocation = event => setLocation(event.target.value);

    const addVehicle = () => {
        console.log("Input Details");
        console.log(model);
        console.log(licensePlate);
        console.log(state);
        console.log(mileage);
        console.log(dailyPrice);
        console.log(location);
    }

    return (
        <div>
            <input 
                className='carInput'
                name='model'
                type='text'
                placeholder='Enter Car model'
                onChange={handleModel}/*{(event) => {
                    setModel(event.target.value)
                }}*/
            />
            <input
                className='carInput'
                name='licensePlate'
                type='text'
                placeholder='License Plate No.'
                onChange={handlePlate}/*{(event) => {setModel(event.target.value)}}*/
            />
            <input
                className='carInput'
                name='state'
                type='text'
                placeholder='State'
                onChange={handleState}
            />
            <input
                className='carInput'
                name='mileage'
                type='number'
                placeholder='Current Mileage'
                onChange={handleMileage}
            />
            <input
                className='carInput'
                name='dailyPrice'
                type='number'
                placeholder='Enter Desired Daily Price'
                onChange={handlePrice}
            />
            <input
                className='carInput'
                name='location'
                type='text'
                placeholder='Location'
                onChange={handleLocation}
            />
            <div>
                <button className='Account-button' onClick={addVehicle}>Add Vehicle</button>
            </div>
        </div>
    )
};

export default AddVehicle;