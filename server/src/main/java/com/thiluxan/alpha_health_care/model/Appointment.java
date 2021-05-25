package com.thiluxan.alpha_health_care.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "appointments")
public class Appointment {

    @Id
    private int id;
    private String name;
    private String email;
    private String doctor;
    private int fees;
    private int phone;
    private String date;
    private String time;
    private String status;

    public Appointment() {
    }

    public Appointment(int id, String name, String email, String doctor, int fees, int phone, String date, String time, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.doctor = doctor;
        this.fees = fees;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    public Appointment(String name, String email, String doctor, int fees, int phone, String date, String time, String status) {
        this.name = name;
        this.email = email;
        this.doctor = doctor;
        this.fees = fees;
        this.phone = phone;
        this.date = date;
        this.time = time;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDoctor() {
        return doctor;
    }

    public void setDoctor(String doctor) {
        this.doctor = doctor;
    }

    public int getFees() {
        return fees;
    }

    public void setFees(int fees) {
        this.fees = fees;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
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

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
