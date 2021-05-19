package com.thiluxan.alpha_health_care.repo;

import com.thiluxan.alpha_health_care.model.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentRepo extends JpaRepository<Appointment, Integer> {

    Appointment findAppointmentByReceipt(int receipt);

    void deleteAppointmentByReceipt(int receipt);
}
