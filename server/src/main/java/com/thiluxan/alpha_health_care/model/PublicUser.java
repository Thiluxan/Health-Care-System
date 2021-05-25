package com.thiluxan.alpha_health_care.model;

public class PublicUser {

    private String name;
    private String email;
    private int phone;
    private String domain;

    public PublicUser() {
    }

    public PublicUser(String name, String email, int phone, String domain) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.domain = domain;
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

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getDomain() {
        return domain;
    }

    public void setDomain(String domain) {
        this.domain = domain;
    }
}
