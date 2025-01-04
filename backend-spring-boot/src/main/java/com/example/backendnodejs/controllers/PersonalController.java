package com.example.backendnodejs.controllers;

import com.example.backendnodejs.domain.Personal;
import com.example.backendnodejs.service.PersonalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5173")
@RestController
@RequestMapping("api")
public class PersonalController {

    @Autowired
    private PersonalService personalService;

    @GetMapping(path = "/personal")
    public List<Personal> getPersonal() {
        return personalService.getAllPersonal();
    }

    //getid, post, put y delete
    @GetMapping(path = "/personal/{id}")
    public Personal getPersonalById(@PathVariable Long id) {
        return personalService.getPersonalById(id);
    }

    @PostMapping(path = "/personal")
    public Personal createPersonal(@RequestBody Personal personal) {
        return personalService.createPersonal(personal);
    }

    @PutMapping(path = "/personal/{id}")
    public Personal updatePersonal(@PathVariable Long id, @RequestBody Personal personal) {
        personalService.updatePersonal(id, personal);
        return personal;
    }

}
