package com.projetos.despachante.services;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.projetos.despachante.dto.RoleDTO;
import com.projetos.despachante.entities.Role;
import com.projetos.despachante.repositories.RoleRepository;
import com.projetos.despachante.services.exceptions.EntityNotFoundException;

@Service
public class RoleService {

	@Autowired
	private RoleRepository repository;

	@Transactional(readOnly = true)
	public List<RoleDTO> findAll() {
		List<Role> list = repository.findAll();

		List<RoleDTO> listDTO = list.stream().map(x -> new RoleDTO(x)).collect(Collectors.toList());
		
		return listDTO;
	}

	@Transactional(readOnly = true)
	public RoleDTO findById(Long id) {
		Optional<Role> obj = repository.findById(id);
		Role entity = obj.orElseThrow(() -> new EntityNotFoundException("Entity not found"));
		return new RoleDTO(entity);
	}

	@Transactional(readOnly = true)
	public RoleDTO insert(RoleDTO dto) {
		Role entity = new Role();
		entity.setAuthority(dto.getAuthority());
		entity = repository.save(entity);
		return new RoleDTO(entity);
	}
}
