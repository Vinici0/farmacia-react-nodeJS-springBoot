package com.example.backendnodejs.repository;

import com.example.backendnodejs.domain.Pedido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PedidoRepo extends JpaRepository<Pedido, Long> {
}
