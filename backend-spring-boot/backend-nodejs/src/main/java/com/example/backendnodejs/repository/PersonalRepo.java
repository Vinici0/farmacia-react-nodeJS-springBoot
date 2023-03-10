package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Personal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonalRepo extends JpaRepository<Personal, Long> {

}
