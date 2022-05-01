// Sets the authentication token into the header of the browser

import axios from "axios";

// Sets header and localstorage to the token object if it exists, clears it if it does not.
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    localStorage.setItem("token", token);
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    localStorage.removeItem("token");
  }
};
