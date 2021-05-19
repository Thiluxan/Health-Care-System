package com.thiluxan.alpha_health_care.service;

import com.thiluxan.alpha_health_care.model.DoctorVisit;
import com.thiluxan.alpha_health_care.repo.DoctorVisitRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DoctorVisitService {

    @Autowired
    DoctorVisitRepo doctorVisitRepo;

    public List<DoctorVisit> getDoctorVisits(){
        return doctorVisitRepo.findAll();
    }

    public DoctorVisit getDoctorVisit(int id){
        return doctorVisitRepo.findById(id).get();
    }

    public void addDoctorVisit(DoctorVisit doctorVisit){
        doctorVisitRepo.save(doctorVisit);
    }

    public void updateDoctorVisit(int id,DoctorVisit doctorVisit){
        doctorVisit.setId(id);
        doctorVisitRepo.save(doctorVisit);
    }

    public void deleteDoctorVisit(int id){
        doctorVisitRepo.deleteById(id);
    }
}
