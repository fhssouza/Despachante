INSERT INTO tb_role(authority, created_At) VALUES ('Administrador', NOW());
INSERT INTO tb_role(authority, created_At) VALUES ('Despachante', NOW());
INSERT INTO tb_role(authority, created_At) VALUES ('Cliente', NOW());

INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Fabio', 'Souza', 'fhssouza@gmail.com', '123456');
INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Marcelo', 'Alves', 'marcelo@gmail.com', '123456');
INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Deyvid', 'Andrade', 'deyvid@gmail.com', '123456');
INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Fabricio', 'Augusto', 'fabricio@gmail.com', '123456');
INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Gabriela', 'Silva', 'gabriela@gmail.com', '123456');
INSERT INTO tb_user(fist_Name, last_Name, email, password) VALUES ('Marcelo', 'Pires', 'pires@gmail.com', '123456');


INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (5, 3);
INSERT INTO tb_user_role (user_id, role_id) VALUES (6, 2);

