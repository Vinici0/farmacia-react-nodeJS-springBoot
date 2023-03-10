package com.example.backendnodejs.controllers;

import com.example.backendnodejs.domain.Producto;
import com.example.backendnodejs.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("api")
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping(path = "/productos")
    public  ResponseEntity<List<Producto>> getProductos() {
        return ResponseEntity.ok().body(productoService.getAllProducto());
    }

    //Producto estatado true
    @GetMapping(path = "/productos/true")
    public  ResponseEntity<List<Producto>> getProductosTrue() {
        return ResponseEntity.ok().body(productoService.getAllProductoEstadoTrue());
    }

    @GetMapping(path = "/productos/{id}")
    public ResponseEntity<Producto> getProductoById(@PathVariable Long id) {
        return ResponseEntity.ok().body(productoService.getProductoById(id));
    }

    @PostMapping(path = "/productos")
    public ResponseEntity<Producto> createProducto(@RequestBody Producto producto) {
        return new ResponseEntity<>(productoService.createProducto(producto), HttpStatus.CREATED);
    }

    //updateEstadoProducto
    @PutMapping(path = "/productos/estado/{id}")
    public ResponseEntity<Producto> updateEstadoProducto(@PathVariable Long id, @RequestBody Producto producto) {
        productoService.updateEstadoProducto(id, producto);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping(path = "/productos/{id}")
    public ResponseEntity<Producto> updateProducto(@PathVariable Long id, @RequestBody Producto producto) {
        productoService.updateProducto(id, producto);
        return new ResponseEntity<>(producto, HttpStatus.OK);
    }

}
