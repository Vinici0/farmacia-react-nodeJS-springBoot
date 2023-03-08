package com.example.backendnodejs.service;

import com.example.backendnodejs.domain.UserPhomeNumber;
import com.example.backendnodejs.repository.UserPhomeRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPhomeService {

    @Autowired
    private UserPhomeRepo userPhomeRepo;

    private List<UserPhomeNumber> userPhomeNumber(){
        return userPhomeRepo.findAll();
    }

    //byid, create, update, delete
    private UserPhomeNumber getUserPhomeNumberById(Long id){
        return userPhomeRepo.findById(id).orElseThrow(() -> new RuntimeException("User Phone Number Not Found!"));
    }

    private UserPhomeNumber createUserPhomeNumber(UserPhomeNumber userPhomeNumber){
        return userPhomeRepo.save(userPhomeNumber);
    }

    private UserPhomeNumber updateUserPhomeNumber(Long id, UserPhomeNumber userPhomeNumber){
        UserPhomeNumber existingUserPhomeNumber = getUserPhomeNumberById(id);
        existingUserPhomeNumber.setPhoneNumber(userPhomeNumber.getPhoneNumber());
        return userPhomeRepo.save(existingUserPhomeNumber);
    }

    private void deleteUserPhomeNumber(Long id){
        userPhomeRepo.deleteById(id);
    }
}
