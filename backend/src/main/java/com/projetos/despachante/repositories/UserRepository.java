package com.projetos.despachante.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetos.despachante.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
