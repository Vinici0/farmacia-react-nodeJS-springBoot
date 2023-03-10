package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepo  extends JpaRepository<Producto, Long> {

    List<Producto> findByEstadoTrue();

    //Actualizar estado
    Producto findByIdAndEstadoTrue(Long id);

}
