package com.example.backendnodejs.controllers;

import com.example.backendnodejs.domain.Pedido;
import com.example.backendnodejs.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("api")
public class PedidoController {

    @Autowired
    private PedidoService pedidoService;

    @GetMapping(path = "/pedidos")
    public ResponseEntity<List<Pedido>> getPedidos() {
        return ResponseEntity.ok().body(pedidoService.getAllPedido());
    }

    //getid, post, put y delete
    @GetMapping(path = "/pedidos/{id}")
    public ResponseEntity<Pedido> getPedidoById(@PathVariable Long id) {
        return ResponseEntity.ok().body(pedidoService.getPedidoById(id));
    }

    @PostMapping(path = "/pedidos")
    public ResponseEntity<Pedido> createPedido(@RequestBody Pedido pedido) {
        return new ResponseEntity<>(pedidoService.createPedido(pedido), HttpStatus.CREATED);
    }

    @DeleteMapping
    public ResponseEntity<Pedido> deletePedido(@PathVariable Long id) {
        pedidoService.deletePedido(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
