import axios from 'axios';
import authService from '../authentication/auth-service';

const API_URL = "http://localhost:8080/users/"

const user = authService.getCurrentUser();

const fetchOneUser = (email) => {
    return axios.get(API_URL+`${email}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const updateUser = (email,updatedUser) => {
    return axios.put(API_URL+`${email}`,updatedUser,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const fetchAllUsers = () => {
    return axios.get(API_URL,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const deleteUser = (email) => {
    return axios.delete(API_URL+`${email}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const addUser = (newUser) => {
    return axios.post(API_URL,newUser,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}
export default {fetchOneUser,updateUser,fetchAllUsers,deleteUser,addUser}