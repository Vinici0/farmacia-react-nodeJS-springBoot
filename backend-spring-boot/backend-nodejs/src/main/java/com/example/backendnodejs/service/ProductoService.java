package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Producto;
import com.example.backendnodejs.repository.ProductoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
public class ProductoService {

    @Autowired
    private ProductoRepo productoRepo;

    public List<Producto> getAllProducto() {
        return productoRepo.findAll();
    }

    //Productos estado true
    public List<Producto> getAllProductoEstadoTrue() {
        return productoRepo.findByEstadoTrue();
    }

    public Producto getProductoById(Long id) {
        return productoRepo.findById(id).orElseThrow(() -> new RuntimeException("Producto Not Found!"));
    }

    public Producto createProducto(Producto producto) {
        LocalDate fecha = LocalDate.parse(producto.getFechaCaducida()+"", DateTimeFormatter.ofPattern("yyyy-MM-dd"));
        producto.setFechaCaducida(fecha);
        return productoRepo.save(producto);
    }

    public Producto updateProducto( Long id, Producto producto) {
        Producto existingProducto = getProductoById(id);
        existingProducto.setNombre(producto.getNombre());
        existingProducto.setDescripcion(producto.getDescripcion());
        existingProducto.setPrecio(producto.getPrecio());
        existingProducto.setFechaCaducida(producto.getFechaCaducida());
        existingProducto.setId_provedor(producto.getId_provedor());
        existingProducto.setFoto(producto.getFoto());
        existingProducto.setCategoriaId(producto.getCategoriaId());
        return productoRepo.save(existingProducto);
    }

    //findByIdAndEstadoTrue - PatchMappin
    public Producto updateEstadoProducto(Long id, Producto producto) {
        Producto existingProducto = getProductoById(id);
        existingProducto.setEstado(producto.isEstado());
        return productoRepo.save(existingProducto);
    }

    public void deleteProducto(Long id) {
        productoRepo.deleteById(id);
    }


}
