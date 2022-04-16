import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Content,
  InputContent,
  Input,
  Span,
  ButtonLogin,
  RegisterContent,
} from "./styles";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPasword] = useState();

  const changeTypePassword = () => {
    if (typePassword === "password") {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
  };

  return (
    <Container>
      <Content>
        <InputContent>
          <FaEnvelope />
          <Input
            type="text"
            placeholder="Nome"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </InputContent>
        <InputContent>
          <FaEnvelope />
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
            onChange={(e) => setPasword(e.target.value)}
          />

          {typePassword === "password" ? (
            <FaEye onClick={changeTypePassword} />
          ) : (
            <FaEyeSlash onClick={changeTypePassword} />
          )}
        </InputContent>
        <Span color="#fdba13"></Span>

        <ButtonLogin disabled={!email || !password}>ENTRAR</ButtonLogin>

        <RegisterContent>
          <Span color="#ccc">
            Já tem uma conta?
            <Link to="/login" color="#fdba13">
              Faça o login
            </Link>
          </Span>
        </RegisterContent>
      </Content>
    </Container>
  );
};
export default Login;
