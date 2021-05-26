package com.thiluxan.alpha_health_care.service;

import com.thiluxan.alpha_health_care.model.PublicUser;
import com.thiluxan.alpha_health_care.model.User;
import com.thiluxan.alpha_health_care.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    UserRepo userRepo;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepo.findUserByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("User not found with email: " + email);
        }
        return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(),
                new ArrayList<>());
    }

    public void saveUser(User user){
        String password = user.getPassword();
        user.setPassword(passwordEncoder.encode(password));
        userRepo.save(user);
    }

    public List<User> getAllUsers(){
        return userRepo.findAll();
    }

    public User getUser(String email){
        return userRepo.findUserByEmail(email);
    }

    public void deleteUser(String email){
        userRepo.deleteUserByEmail(email);
    }

    public void updateUser(PublicUser publicUser){
        User user = userRepo.findUserByEmail(publicUser.getEmail());
        user.setName(publicUser.getName());
        user.setEmail(publicUser.getEmail());
        user.setPhone(publicUser.getPhone());
        user.setDomain(publicUser.getDomain());
        userRepo.save(user);
    }
}
