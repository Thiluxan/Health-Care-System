import axios from "axios";

const API_URL = "http://localhost:8080/";

const register = (name,email, password,role,phone,domain) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
    role,
    phone,
    domain
  },{
    headers: {
      'Content-Type': 'application/json'  } 
  });
};

const login = (email, password) => {
    console.log("Login")
    return axios.post(API_URL + "authenticate", {
      email,
      password,
    })
    .then((response) => {
      if (response.data) {
        console.log(response)
        console.log(response.data)
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};