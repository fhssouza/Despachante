import React from "react";
import { Container, TitleContainer, Controllers } from "./styles";
import SelectInput from "../../components/SelectInput";

const ContentHeader = () => {
  const values = [
    { id: 1, value: "1", label: "1" },
    { id: 2, value: "2", label: "2" },
    { id: 3, value: "3", label: "3" },
  ];
  const labels = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>
      <Controllers>
        {
          (values,
          labels.map((value, label) => (
            <SelectInput value={value} Label={label} />
          )))
        }
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
