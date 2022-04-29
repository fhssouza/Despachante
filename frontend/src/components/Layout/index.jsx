//styles
import { Container } from "./styles";

//components
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout = ({ children }) => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
