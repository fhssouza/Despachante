import React from "react";
import { Container } from "./styles";

const SelectInput = () => {
  return (
    <Container>
      <select>
        <option value="Marcelo">Marcelo</option>
        <option value="Alberto">Alberto</option>
        <option value="Alves">Alves</option>
      </select>
    </Container>
  );
};

export default SelectInput;
