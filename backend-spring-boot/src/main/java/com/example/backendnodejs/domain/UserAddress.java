package com.example.backendnodejs.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "userAddress")
public class UserAddress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String houseNumber;
    private String streetName;
    private String city;
    private String state;
    private String zipCode;
    @Column(name = "user_id")
    Long userId;

}
