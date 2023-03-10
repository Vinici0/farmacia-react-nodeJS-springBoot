package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriaRepo  extends JpaRepository<Categoria, Long> {

}
