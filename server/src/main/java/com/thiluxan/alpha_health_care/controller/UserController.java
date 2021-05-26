package com.thiluxan.alpha_health_care.controller;

import com.thiluxan.alpha_health_care.configuration.JwtTokenUtil;
import com.thiluxan.alpha_health_care.model.JwtRequest;
import com.thiluxan.alpha_health_care.model.PublicUser;
import com.thiluxan.alpha_health_care.model.ResponseUser;
import com.thiluxan.alpha_health_care.model.User;
import com.thiluxan.alpha_health_care.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class UserController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseUser createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());

        final UserDetails userDetails = userService
                .loadUserByUsername(authenticationRequest.getEmail());

        System.out.println(userDetails.getUsername());

        User user = userService.getUser(userDetails.getUsername());

        System.out.println(user.getEmail());

        final String token = jwtTokenUtil.generateToken(userDetails);

        return new ResponseUser(user.getEmail(),user.getRole(),user.getName(),user.getPhone(),user.getDomain(),token);
    }

    @PostMapping("/register")
    public void register(@RequestBody User user){
        userService.saveUser(user);
    }

    @PostMapping("/users")
    public void addUser(@RequestBody User user){
        userService.saveUser(user);
    }

    @GetMapping("/users")
    public List<PublicUser> getAllUsers(){
        List<User> users = userService.getAllUsers();
        List<PublicUser> publicUsers = new ArrayList<>();
        for(int i=0;i<users.size();i++){
            User tempUser = users.get(i);
            publicUsers.add(new PublicUser(tempUser.getName(),tempUser.getEmail(),tempUser.getPhone(),tempUser.getDomain(),tempUser.getRole()));
        }
        return publicUsers;
    }

    @GetMapping("/users/{email}")
    public PublicUser getUser(@PathVariable String email){
        User user = userService.getUser(email);
        return new PublicUser(user.getName(),user.getEmail(),user.getPhone(),user.getDomain(),user.getRole());
    }

    @PutMapping("/users/{email}")
    public void updateUser(@RequestBody PublicUser publicUser,@PathVariable String email){
        System.out.println(publicUser);
        userService.updateUser(publicUser);
    }

    @DeleteMapping("/users/{email}")
    public void deleteUser(@PathVariable String email){
        userService.deleteUser(email);
    }

    private void authenticate(String email, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
