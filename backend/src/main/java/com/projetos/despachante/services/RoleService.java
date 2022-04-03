package com.projetos.despachante.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetos.despachante.entities.Role;
import com.projetos.despachante.repositories.RoleRepository;

@Service
public class RoleService {
	
	@Autowired
	private RoleRepository repository;

	@Transactional(readOnly = true)
	public List<Role> findAll(){
		return repository.findAll();
	}
}
