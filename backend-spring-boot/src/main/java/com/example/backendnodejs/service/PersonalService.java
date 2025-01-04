package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Personal;
import com.example.backendnodejs.repository.PersonalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonalService {
    @Autowired
    private PersonalRepo personalRepo;

    public List<Personal> getAllPersonal() {
        return personalRepo.findAll();
    }

    public Personal getPersonalById(Long id) {
        return personalRepo.findById (id).orElseThrow(() -> new RuntimeException("Personal Not Found!"));
    }

    public Personal createPersonal(Personal personal) {
        return personalRepo.save(personal);
    }

    public void updatePersonal(Long id, Personal personal) {
        Personal existingPersonal = getPersonalById(id);
        existingPersonal.setNombre(personal.getNombre());
        existingPersonal.setCedula(personal.getCedula());
        existingPersonal.setDireccion(personal.getDireccion());
        existingPersonal.setFoto(personal.getFoto());
        existingPersonal.setIdFarmacia(personal.getIdFarmacia());
        existingPersonal.setEstado(personal.getEstado());
        personalRepo.save(existingPersonal);

    }

    public void deletePersonal(Long id) {
        personalRepo.deleteById(id);
    }
}
