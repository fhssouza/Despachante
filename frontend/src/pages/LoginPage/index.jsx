import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/clickdespLogo.png";

import {
  Container,
  Content,
  InputContent,
  Input,
  Span,
  ButtonLogin,
  RegisterContent,
  ContainerForm,
} from "./styles";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [typePassword, setTypePassword] = useState("password");
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
      <ContainerForm>
        <Content>
          <img src={Logo} alt="logo" />
          <InputContent>
            <FaEnvelope />
            <Input
              type="email"
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
          <Span color="#fdba13">Esqueci minha senha</Span>

          <ButtonLogin disabled={!email || !password}>ENTRAR</ButtonLogin>

          <RegisterContent>
            <Span color="#ccc">
              Não tem uma conta?
              <Link to="/register" color="#fdba13">
                Registre-se
              </Link>
            </Span>
          </RegisterContent>
        </Content>
      </ContainerForm>
    </Container>
  );
};
export default Login;
