import axios from 'axios';
import authService from '../authentication/auth-service';

const API_URL = "http://localhost:8080/appointments/"

const user = authService.getCurrentUser();

const fetchAppointments = () => {
    return axios.get(API_URL,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const addAppointment = (newAppointment) => {
    return axios.post(API_URL,newAppointment,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const deleteAppointment = (receipt) => {
    return axios.delete(API_URL+`${receipt}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const updateAppointment = (id,updatedAppointment) => {
    return axios.put(API_URL+`${id}`,updatedAppointment,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const fetchAppointmentsByEmail = (email) => {
    return axios.get(API_URL+`booking/${email}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

const fetchAppointmentById = (id) => {
    return axios.get(API_URL+`${id}`,{
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + user.jwtToken
        }
    })
}

export default {fetchAppointments,addAppointment,deleteAppointment,updateAppointment,fetchAppointmentsByEmail,fetchAppointmentById}