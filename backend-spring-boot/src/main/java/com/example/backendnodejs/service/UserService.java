package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.Usuario;
import com.example.backendnodejs.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    private List<Usuario> getAllUsers(){
        return userRepo.findAll();
    }
    private Usuario getUserById(Long id){
        return userRepo.findById(id).orElseThrow(() -> new RuntimeException("User Not Found!"));
    }

    private Usuario createUser(Usuario user){
        return userRepo.save(user);
    }


    private Usuario updateUser(Long id, Usuario user){
        Usuario existingUser = getUserById(id);
        existingUser.setName(user.getName());
        existingUser.setEmail(user.getEmail());
        return userRepo.save(existingUser);
    }

    private void deleteUser(Long id){
        userRepo.deleteById(id);
    }

}
