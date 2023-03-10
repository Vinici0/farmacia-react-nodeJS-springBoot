package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepo  extends JpaRepository<Cliente, Long> {
}
