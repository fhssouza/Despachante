import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Header,
  LogImg,
  MenuContainer,
  MenuItemLink,
} from "./styles";
import Logo from "../../assets/clickdespLogo.png";
import {
  MdDashboard,
  MdDirectionsCar,
  MdExitToApp,
  MdDocumentScanner,
  MdPerson,
  MdHome,
} from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <Header>
        <LogImg src={Logo} alt="logo ClickDesp" />
      </Header>
      <MenuContainer>
        <Link to="/">
          <MenuItemLink>
            <MdHome />
            Home
          </MenuItemLink>
        </Link>
        <Link to="/dashborad">
          <MenuItemLink>
            <MdDashboard />
            Dashboard
          </MenuItemLink>
        </Link>
        <Link to="/clients">
          <MenuItemLink>
            <MdPerson />
            Clientes
          </MenuItemLink>
        </Link>
        <Link to="/services">
          <MenuItemLink>
            <MdDirectionsCar />
            Serviços
          </MenuItemLink>
        </Link>
        <Link to="/budgets">
          <MenuItemLink>
            <MdDocumentScanner />
            Orçamentos
          </MenuItemLink>
        </Link>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
