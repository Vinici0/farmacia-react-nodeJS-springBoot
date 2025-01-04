package com.example.backendnodejs.controllers;

import com.example.backendnodejs.domain.Cliente;
import com.example.backendnodejs.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("api")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping(path = "/clientes")
    public ResponseEntity<List<Cliente>> getClientes() {
        return ResponseEntity.ok().body(clienteService.getAllCliente());
    }

    @GetMapping(path = "/cliente/{id}")
    public ResponseEntity<Cliente> getPersonalById(@PathVariable Long id) {
        return ResponseEntity.ok().body(clienteService.getClienteById(id));
    }

    @PostMapping(path = "/cliente")
    public ResponseEntity<Cliente> createEmployee(@RequestBody Cliente cliente) {
        return new ResponseEntity<>(clienteService.createCliente(cliente), HttpStatus.CREATED);
    }

    @PutMapping(path = "/cliente/{id}")
    public ResponseEntity<Cliente> updateCliente(@PathVariable Long id, @RequestBody Cliente cliente) {
        clienteService.updateCliente(id, cliente);
        return new ResponseEntity<>(cliente, HttpStatus.OK);
    }

    @DeleteMapping(path = "/cliente/{id}")
    public ResponseEntity<Cliente> deleteCliente(@PathVariable Long id) {
        clienteService.deleteCliente(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
