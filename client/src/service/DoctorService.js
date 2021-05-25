import axios from 'axios';
import authService from '../authentication/auth-service';

const API_URL = "http://localhost:8080/doctorVisits/"

const user = authService.getCurrentUser();


const addDoctorVisit = (newDoctorVisit) => {
    return axios.post(API_URL,newDoctorVisit,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const fetchOneDoctorVisits = (email) => {
    return axios.get(API_URL+`doctor/${email}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const fetchAllDoctorVisits = () => {
    return axios.get(API_URL,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const cancelDoctorVist = (id) => {
    return axios.delete(API_URL+`${id}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
    
}

const updateDoctorVisit = (id,updatedDoctorVisit) => {
    return axios.put(API_URL+`${id}`,updatedDoctorVisit,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

export default {addDoctorVisit,fetchOneDoctorVisits,fetchAllDoctorVisits,cancelDoctorVist,updateDoctorVisit}