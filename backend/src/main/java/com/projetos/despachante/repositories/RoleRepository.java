package com.projetos.despachante.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.projetos.despachante.entities.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

}
