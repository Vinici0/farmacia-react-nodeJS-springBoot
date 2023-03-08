package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Usuario;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Usuario, Long> {

}
