package com.projetos.despachante.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import com.projetos.despachante.entities.Role;
import com.projetos.despachante.entities.User;

public class UserDTO implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	private String fistName;
	private String lastName;
	private String email;
	private String password;

	private List<RoleDTO> roles = new ArrayList<>();

	public UserDTO() {

	}

	public UserDTO(Long id, String fistName, String lastName, String email, String password) {
		super();
		this.id = id;
		this.fistName = fistName;
		this.lastName = lastName;
		this.email = email;
		this.password = password;
	}

	public UserDTO(User entity) {
		this.id = entity.getId();
		this.fistName = entity.getFistName();
		this.lastName = entity.getLastName();
		this.email = entity.getEmail();
		this.password = entity.getPassword();
	}

	public UserDTO(User entity, Set<Role> roles) {
		this(entity);
		roles.forEach(rol -> this.roles.add(new RoleDTO(rol)));
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFistName() {
		return fistName;
	}

	public void setFistName(String fistName) {
		this.fistName = fistName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<RoleDTO> getRoles() {
		return roles;
	}

	public void setRoles(List<RoleDTO> roles) {
		this.roles = roles;
	}

}
