import React, { useReducer, useContext, useEffect } from "react";
import axios from "axios";

import AuthContext from "./authContext";
import authReducer from "./authReducer";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../types";

// Create a hook to use auth context

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

// Action creators

// Load User: Gets the logged in user and stores it in global state.
export const loadUser = async (dispatch) => {
  try {
    const res = await axios.get("/api/auth");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({ type: AUTH_ERROR });
  }
};

// Register user: Registers a user, logs them in, and stores it in global state.
export const register = async (dispatch, formData) => {
  try {
    const res = await axios.post("/api/users", formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({ type: REGISTER_FAIL, payload: err.response.data.msg });
  }
};

// Login User: Log in user and store in global state.
export const login = async (dispatch, formData) => {
  try {
    const res = await axios.post("/api/auth", formData);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    loadUser(dispatch);
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

// Logout: Logout user and clear global user state.
export const logout = (dispatch) => {
  dispatch({ type: LOGOUT });
};

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Set token on initial loading
  setAuthToken(state.token);

  // Load on first run or refresh
  if (state.loading) {
    loadUser(dispatch);
  }

  // watch state.token and set headers
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
