import React from "react";
import './AddVehicle.css';
import {useState} from 'react';
import axios, { Axios } from "axios";

function AddVehicle() {
    const [model, setModel] = useState('');
    const [licensePlate, setPlate] = useState('');
    const [state, setState] = useState('');
    const [mileage, setMileage] = useState(0);
    const [dailyPrice, setPrice] = useState(0);
    const [location, setLocation] = useState('');
    const [owner_id, setOwner] = useState(1);


    const handleModel = event => setModel(event.target.value);
    const handlePlate = event => setPlate(event.target.value);
    const handleState = event => setState(event.target.value);
    const handleMileage = event => setMileage(event.target.value);
    const handlePrice = event => setPrice(event.target.value);
    const handleLocation = event => setLocation(event.target.value);

    const addVehicle = () => {
        Axios.post('http://localhost:3001/addvehicle', {
            owner_id:owner_id,
            model:model,
            licensePlate:licensePlate,
            state:state,
            mileage:mileage,
            dailyPrice:dailyPrice,
            location:location
        });
    };

    return (
        <div>
            <input 
                className='carInput'
                name='model'
                type='text'
                placeholder='Enter Car model'
                onChange={handleModel}
            />
            <br/>
            <input
                className='carInput'
                name='licensePlate'
                type='text'
                placeholder='License Plate No.'
                onChange={handlePlate}
            />
            <br/>
            <input
                className='carInput'
                name='state'
                type='text'
                placeholder='State'
                onChange={handleState}
            />
            <br/>
            <input
                className='carInput'
                name='mileage'
                type='number'
                placeholder='Current Mileage'
                onChange={handleMileage}
            />
            <br/>
            <input
                className='carInput'
                name='dailyPrice'
                type='number'
                placeholder='Enter Desired Daily Price'
                onChange={handlePrice}
            />
            <br/>
            <input
                className='carInput'
                name='location'
                type='text'
                placeholder='Location'
                onChange={handleLocation}
            />
            <div>
                <button className='submitButton' onClick={addVehicle}>Add Vehicle</button>
            </div>
        </div>
    )
};

export default AddVehicle;