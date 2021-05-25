package com.thiluxan.alpha_health_care.controller;

import com.thiluxan.alpha_health_care.model.Appointment;
import com.thiluxan.alpha_health_care.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AppointmentController {

    @Autowired
    AppointmentService appointmentService;

    @GetMapping("/appointments")
    public List<Appointment> getAppointments(){
        return appointmentService.getAppointments();
    }

    @GetMapping("/appointments/{id}")
    public Appointment appointment(@PathVariable int id){
        return appointmentService.getAppointment(id);
    }

    @PostMapping("/appointments")
    public void addAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @PutMapping("/appointments/{id}")
    public void updateAppointment(@RequestBody Appointment appointment,@PathVariable int id){
        appointmentService.updateAppointment(id,appointment);
    }

    @DeleteMapping("/appointments/{id}")
    public void deleteAppointment(@PathVariable int id){
        appointmentService.deleteAppointment(id);
    }

    @GetMapping("/appointments/booking/{email}")
    public List<Appointment> getAppointmentsByEmail(@PathVariable String email){
        return appointmentService.getAppointmentsByEmail(email);
    }
}
