package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Pedido;
import com.example.backendnodejs.repository.PedidoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class PedidoService {

    @Autowired
    private PedidoRepo pedidoRepo;

    public List<Pedido> getAllPedido() {
        return pedidoRepo.findAll();
    }

    public Pedido getPedidoById(Long id) {
        return pedidoRepo.findById(id).orElseThrow(() -> new RuntimeException("Pedido Not Found!"));
    }

    public Pedido createPedido(Pedido pedido) {
        LocalDate fecha = LocalDate.parse(pedido.getFecha()+"", DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        pedido.setFecha(fecha);
        return pedidoRepo.save(pedido);
    }

    public void deletePedido(Long id) {
        pedidoRepo.deleteById(id);
    }

}
