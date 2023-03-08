package com.example.backendnodejs.controller;
import com.example.exu3.domain.Usuario;
import com.example.exu3.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/users")
    public List<Usuario> getUsers() {
        return userService.get
    }

}
