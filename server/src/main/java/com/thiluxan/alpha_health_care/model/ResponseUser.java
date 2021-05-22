package com.thiluxan.alpha_health_care.model;

public class ResponseUser {

    private String email;
    private String role;
    private String name;
    private int phone;
    private String domain;
    private String jwtToken;

    public ResponseUser() {
    }

    public ResponseUser(String email, String role, String name, int phone, String domain, String jwtToken) {
        this.email = email;
        this.role = role;
        this.name = name;
        this.phone = phone;
        this.domain = domain;
        this.jwtToken = jwtToken;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public String getJwtToken() {
        return jwtToken;
    }

    public void setJwtToken(String jwtToken) {
        this.jwtToken = jwtToken;
    }
}
