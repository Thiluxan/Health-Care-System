package com.thiluxan.alpha_health_care.repo;

import com.thiluxan.alpha_health_care.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

    List<Appointment> findAllByEmailOrderByIdDesc(String email);
}
