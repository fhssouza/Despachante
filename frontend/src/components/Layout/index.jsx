//styles
import { Container } from "./styles";

//components
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

const Layout = () => {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  );
};

export default Layout;
