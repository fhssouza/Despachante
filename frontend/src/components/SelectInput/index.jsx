import React from "react";
import { Container } from "./styles";

const SelectInput = ({ value, label }) => {
  return (
    <Container>
      <select>
        <option {...value}>{label}</option>
        <option {...value}>{label}</option>
        <option {...value}>{label}</option>
      </select>
    </Container>
  );
};

export default SelectInput;
