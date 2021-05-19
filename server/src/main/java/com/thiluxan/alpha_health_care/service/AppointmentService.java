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

    public Appointment getAppointment(int receipt){
        return appointmentRepo.findAppointmentByReceipt(receipt);
    }

    public void addAppointment(Appointment appointment){
        appointmentRepo.save(appointment);
    }

    public void updateAppointment(int receipt, Appointment appointment){
        appointment.setReceipt(receipt);
        appointmentRepo.save(appointment);
    }

    public void deleteAppointment(int receipt){
        appointmentRepo.deleteAppointmentByReceipt(receipt);
    }
}
