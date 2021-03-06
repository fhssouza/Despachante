import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useFetch } from "../../hooks/useFetch";
import {
  Container,
  Content,
  InputContent,
  Input,
  Span,
  ButtonRegister,
  RegisterContent,
  InputSelect,
} from "./styles";

const urlUsers = "http://localhost:8080/users";

export const Register = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [role, setRole] = useState("user");

  const { httpConfig } = useFetch(urlUsers);

  // envio do form

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      email,
      password,
      role,
    };

    httpConfig(user, "POST");

    // limpar formularios com redirect não faz sentido
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  return (
    <Container onSubmit={handleSubmit}>
      <Content>
        <InputContent>
          <FaUser />
          <Input
            type="text"
            placeholder="Nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaUser />
          <Input
            type="text"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaEnvelope />
          <Input
            type="E-mail"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaLock />
          <Input
            type={typePassword}
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {typePassword === "password" ? (
            <FaEye onClick={changeTypePassword} />
          ) : (
            <FaEyeSlash onClick={changeTypePassword} />
          )}
        </InputContent>
        <InputContent>
          <FaUser />
          {/* verificar como esconter este select */}
          <InputSelect
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            name={role}
            disabled={true}
            multiple={false}
          >
            <option value="" hidden>
              Roles
            </option>
            <option value="user">Usuario</option>
          </InputSelect>
        </InputContent>
        <RegisterContent>
          <Span color="#ccc">
            Já tem uma conta?
            <Link to="/login" color="#fdba13">
              Faça o login
            </Link>
          </Span>
        </RegisterContent>
        <Span color="#fdba13"></Span>

        <ButtonRegister disabled={!email || !password}>
          Cadastrar
        </ButtonRegister>
      </Content>
    </Container>
  );
};
export default Register;
