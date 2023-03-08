package com.example.backendnodejs.service;


import com.example.backendnodejs.domain.UserAddress;
import com.example.backendnodejs.repository.UserAddressRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAddressService {

    @Autowired
    private UserAddressRepo userAddressRepo;


    private List<UserAddress> userAddress(){
        return userAddressRepo.findAll();
    }

    public UserAddress getUserAddressById(Long id){
        return userAddressRepo.findById(id).orElseThrow(() -> new RuntimeException("User Address Not Found!"));
    }

    public UserAddress createUserAddress(UserAddress userAddress){
        return userAddressRepo.save(userAddress);
    }

    public UserAddress updateUserAddress(Long id, UserAddress userAddress){
        UserAddress existingUserAddress = getUserAddressById(id);
        existingUserAddress.setHouseNumber(userAddress.getHouseNumber());
        existingUserAddress.setStreetName(userAddress.getStreetName());
        existingUserAddress.setCity(userAddress.getCity());
        existingUserAddress.setState(userAddress.getState());
        existingUserAddress.setZipCode(userAddress.getZipCode());
        return userAddressRepo.save(existingUserAddress);
    }

    public void deleteUserAddress(Long id){
        userAddressRepo.deleteById(id);
    }
}
