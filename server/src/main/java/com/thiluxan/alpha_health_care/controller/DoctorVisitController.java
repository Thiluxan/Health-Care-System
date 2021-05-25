package com.thiluxan.alpha_health_care.controller;

import com.thiluxan.alpha_health_care.model.DoctorVisit;
import com.thiluxan.alpha_health_care.service.DoctorVisitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DoctorVisitController {

    @Autowired
    DoctorVisitService doctorVisitService;

    @GetMapping("/doctorVisits")
    public List<DoctorVisit> getDoctorVisits(){
        return doctorVisitService.getDoctorVisits();
    }

    @GetMapping("/doctorVisits/{id}")
    public DoctorVisit getDoctorVisit(@PathVariable int id){
        return doctorVisitService.getDoctorVisit(id);
    }

    @PostMapping("/doctorVisits")
    public void addDoctorVisit(@RequestBody DoctorVisit doctorVisit){
        doctorVisitService.addDoctorVisit(doctorVisit);
    }

    @PutMapping("/doctorVisits/{id}")
    public void updateDoctorVisit(@RequestBody DoctorVisit doctorVisit, @PathVariable int id){
        doctorVisitService.updateDoctorVisit(id,doctorVisit);
    }

    @DeleteMapping("/doctorVisits/{id}")
    public void deleteDoctorVisit(@PathVariable int id){
        doctorVisitService.deleteDoctorVisit(id);
    }

    @GetMapping("/doctorVisits/doctor/{email}")
    public List<DoctorVisit> getDoctorVisitByEmail(@PathVariable String email){
        return doctorVisitService.getDoctorVisitByEmail(email);
    }
}
