package com.thiluxan.alpha_health_care.repo;

import com.thiluxan.alpha_health_care.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepo extends JpaRepository<User,String> {

    User findUserByEmail(String email);

    void deleteByEmail(String email);

    @Transactional
    void deleteUserByEmail(String email);
}
