import React from "react";
import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../../components/SelectInput";

const ContentHeader = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        <SelectInput />
        <SelectInput />
        <SelectInput />
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
