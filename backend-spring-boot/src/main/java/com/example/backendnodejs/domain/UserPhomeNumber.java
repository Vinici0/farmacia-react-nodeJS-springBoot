package com.example.backendnodejs.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table(name = "userPhomeNumber")
public class UserPhomeNumber {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    private String phoneNumber;

    @Column(name = "userPhomeNumber_id")
    Long userId;
}
