import React from "react";
import "./Login.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [user, setUser] = useState({
    user_name: "",
    password: "",
  });

  const { user_name, password } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user_name === "" || password === "") {
      // TODO: Display alert
      console.log("Enter all fields");
    } else {
      // Login user
      try {
        let response = await axios.post("http://localhost:3001/api/auth", {
          user_name,
          password,
        });
        console.log("Successfully logged in");
        console.log(response.data);
      } catch (err) {
        console.log(err.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
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
        <div>
          <input className="submitButton" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
