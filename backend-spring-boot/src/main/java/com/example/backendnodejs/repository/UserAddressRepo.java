package com.example.backendnodejs.repository;


import com.example.backendnodejs.domain.UserAddress;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserAddressRepo extends JpaRepository<UserAddress, Long> {
}
