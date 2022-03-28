import React from "react";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    user_name: "",
    password: "",
    password2: "",
    email: "",
    phone: "",
  });

  const {
    first_name,
    last_name,
    user_name,
    password,
    password2,
    email,
    phone,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      first_name === "" ||
      last_name === "" ||
      user_name === "" ||
      password === "" ||
      email === "" ||
      phone === ""
    ) {
      // TODO: Display alert
      console.log("Enter all fields");
    } else if (password !== password2) {
      // TODO: Display alert
      console.log("Passwords do not match");
    } else {
      // Register user
      try {
        await axios.post("http://localhost:3001/api/users", {
          first_name,
          last_name,
          user_name,
          password,
          email,
          phone,
        });
        console.log("Registered");
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <input
          className="formInput"
          name="first_name"
          type="text"
          placeholder="First name"
          value={first_name}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="last_name"
          type="text"
          placeholder="Last name"
          value={last_name}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="user_name"
          type="text"
          placeholder="Username"
          value={user_name}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="password2"
          type="password"
          placeholder="Re-enter password"
          value={password2}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          className="formInput"
          name="phone"
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={onChange}
          required
        />
        <div>
          <input className="submitButton" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Register;
