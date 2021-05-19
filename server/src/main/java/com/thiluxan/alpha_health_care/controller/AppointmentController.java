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

    @GetMapping("/appointments/{receipt}")
    public Appointment appointment(@PathVariable int receipt){
        return appointmentService.getAppointment(receipt);
    }

    @PostMapping("/appointments")
    public void addAppointment(@RequestBody Appointment appointment){
        appointmentService.addAppointment(appointment);
    }

    @PutMapping("/appointments/{receipt}")
    public void updateAppointment(@RequestBody Appointment appointment,@PathVariable int receipt){
        appointmentService.updateAppointment(receipt,appointment);
    }

    @DeleteMapping("/appointments/{receipt}")
    public void deleteAppointment(@PathVariable int receipt){
        appointmentService.deleteAppointment(receipt);
    }
}
