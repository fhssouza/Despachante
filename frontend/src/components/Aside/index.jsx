import React from "react";
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
  MdHandyman,
} from "react-icons/md";

const Aside = () => {
  return (
    <Container>
      <Header>
        <LogImg src={Logo} alt="logo ClickDesp" />
      </Header>
      <MenuContainer>
        <MenuItemLink href="#">
          <MdDashboard />
          Dashboard
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdPerson />
          Clientes
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdHandyman />
          Serviços
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdDirectionsCar />
          Produtos
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdDocumentScanner />
          Orçamentos
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp />
          Sair
        </MenuItemLink>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
