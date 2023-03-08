package com.example.backendnodejs.controller;

import com.example.u3examen.service.UserAddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("api")
public class UserAddressController {

    @Autowired
    private UserAddressService userAddressService;

//    @GetMapping("/userAddress")
//    public List<UserAddress> getUserAddress() {
//        return userAddressService.getAllUserAddress
//    }

}
