package com.thiluxan.alpha_health_care.service;

import com.thiluxan.alpha_health_care.model.Appointment;
import com.thiluxan.alpha_health_care.repo.AppointmentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AppointmentService {

    @Autowired
    AppointmentRepo appointmentRepo;

    public List<Appointment> getAppointments(){
        return appointmentRepo.findAll();
    }

    public Appointment getAppointment(int id){
        return appointmentRepo.findById(id).get();
    }

    public void addAppointment(Appointment appointment){
        appointmentRepo.save(appointment);
    }

    public void updateAppointment(int id, Appointment appointment){
        appointment.setId(id);
        appointmentRepo.save(appointment);
    }

    public void deleteAppointment(int id){
        appointmentRepo.deleteById(id);
    }

    public List<Appointment> getAppointmentsByEmail(String email){
        return appointmentRepo.findAllByEmailOrderByIdDesc(email);
    }
}
