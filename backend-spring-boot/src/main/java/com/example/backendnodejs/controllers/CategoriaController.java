package com.example.backendnodejs.controllers;

import com.example.backendnodejs.domain.Categoria;
import com.example.backendnodejs.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("api")
public class CategoriaController {

    @Autowired
    private CategoriaService categoriaService;


    @GetMapping(path = "/categorias")
    public List<Categoria> getCategorias() {
        return categoriaService.getAllCategoria();
    }

    //getid, post, put, delete
    @GetMapping(path = "/categorias/{id}")
    public Categoria getCategoriaById(@PathVariable Long id) {
        return categoriaService.getCategoriaById(id);
    }

    @PostMapping(path = "/categorias")
    public Categoria createCategoria(@RequestBody Categoria categoria) {
        return categoriaService.createCategoria(categoria);
    }

    @PutMapping(path = "/categorias/{id}")
    public Categoria updateCategoria(@PathVariable Long id, @RequestBody Categoria categoria) {
        categoriaService.updateCategoria(id, categoria);
        return categoria;
    }

    @DeleteMapping(path = "/categorias/{id}")
    public void deleteCategoria(@PathVariable Long id) {
        categoriaService.deleteCategoria(id);
    }

}
