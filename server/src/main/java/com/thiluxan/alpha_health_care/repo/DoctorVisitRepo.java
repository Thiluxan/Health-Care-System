package com.thiluxan.alpha_health_care.repo;

import com.thiluxan.alpha_health_care.model.DoctorVisit;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DoctorVisitRepo extends JpaRepository<DoctorVisit, Integer> {

    List<DoctorVisit> findAllByEmailOrderByIdDesc(String email);
}
