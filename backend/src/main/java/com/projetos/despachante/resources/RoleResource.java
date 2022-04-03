package com.projetos.despachante.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.projetos.despachante.entities.Role;

@RestController
@RequestMapping(value = "/roles")
public class RoleResource {

	@GetMapping
	public ResponseEntity<List<Role>> findAll() {
		List<Role> list = new ArrayList<>();
		list.add(new Role(1L, "Supervisor"));
		list.add(new Role(2L, "Usuario"));
		return ResponseEntity.ok().body(list);
	}
}
