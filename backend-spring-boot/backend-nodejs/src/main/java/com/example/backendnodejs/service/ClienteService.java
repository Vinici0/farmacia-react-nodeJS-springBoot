package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Cliente;
import com.example.backendnodejs.repository.ClienteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepo clienteRepo;

    public List<Cliente> getAllCliente(){
        return clienteRepo.findAll();
    }

    public Cliente getClienteById(Long id){
        return clienteRepo.findById(id).orElseThrow(() -> new RuntimeException("Cliente Not Found!"));
    }

    public Cliente createCliente(Cliente cliente){
        return clienteRepo.save(cliente);
    }

    public void updateCliente(Long id, Cliente cliente) {
        Cliente existingCliente = getClienteById(id);
        existingCliente.setNombre(cliente.getNombre());
        existingCliente.setApellido(cliente.getApellido());
        existingCliente.setCedula(cliente.getCedula());
        existingCliente.setEmail(cliente.getEmail());
        clienteRepo.save(existingCliente);
    }

    public void deleteCliente(Long id){
        clienteRepo.deleteById(id);
    }
}
