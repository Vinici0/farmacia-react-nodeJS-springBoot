package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.UserPhomeNumber;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserPhomeRepo extends JpaRepository<UserPhomeNumber, Long> {

}
