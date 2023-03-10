package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Categoria;
import com.example.backendnodejs.repository.CategoriaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoriaService {

    @Autowired
    private CategoriaRepo categoriaRepo;

    public List<Categoria> getAllCategoria() {
        return categoriaRepo.findAll();
    }

    public Categoria getCategoriaById(Long id) {
        return categoriaRepo.findById(id).orElseThrow(() -> new RuntimeException("Categoria Not Found!"));
    }

    public Categoria createCategoria(Categoria categoria) {
        return categoriaRepo.save(categoria);
    }

    public void updateCategoria(Long id, Categoria categoria) {
        Categoria existingCategoria = getCategoriaById(id);
        existingCategoria.setNombre(categoria.getNombre());
        existingCategoria.setDescripcion(categoria.getDescripcion());
        categoriaRepo.save(existingCategoria);
    }

    public void deleteCategoria(Long id) {
        categoriaRepo.deleteById(id);
    }
}
