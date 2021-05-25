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

export default {fetchOneUser}