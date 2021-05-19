package com.thiluxan.alpha_health_care.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "doctor_visits")
public class DoctorVisit {

    @Id
    private int id;
    private String date;
    private String time;
    private int fees;
    private int totalPatients;
    private int booking;
    private String status;

    public DoctorVisit() {
    }

    public DoctorVisit(int id, String date, String time, int fees, int totalPatients, int booking, String status) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.fees = fees;
        this.totalPatients = totalPatients;
        this.booking = booking;
        this.status = status;
    }

    public DoctorVisit(String date, String time, int fees, int totalPatients, int booking, String status) {
        this.date = date;
        this.time = time;
        this.fees = fees;
        this.totalPatients = totalPatients;
        this.booking = booking;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public int getFees() {
        return fees;
    }

    public void setFees(int fees) {
        this.fees = fees;
    }

    public int getTotalPatients() {
        return totalPatients;
    }

    public void setTotalPatients(int totalPatients) {
        this.totalPatients = totalPatients;
    }

    public int getBooking() {
        return booking;
    }

    public void setBooking(int booking) {
        this.booking = booking;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
