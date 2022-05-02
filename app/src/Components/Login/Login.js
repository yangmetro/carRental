import React from "react";
import "./Login.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { useAuth, login } from "../../context/auth/AuthState";

const Login = () => {
  // Pull in auth context
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated } = authState;

  const [user, setUser] = useState({
    user_name: "",
    password: "",
  });

  const { user_name, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (user_name === "" || password === "") {
      // TODO: Display alert
      console.log("Please enter all fields");
    } else {
      // Login user
      login(authDispatch, {
        user_name,
        password,
      });
    }
  };

  if (isAuthenticated) return <Navigate to="/display" />;

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
