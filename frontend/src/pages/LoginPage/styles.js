import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
`;

export const ContainerForm = styled.form`
  width: 400px;
  height: 500px;
  background-color: #202024;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 415px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 80%;
  height: 75%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 150px;
    margin-bottom: 20px;
  }
`;

export const InputContent = styled.div`
  background-color: #121214;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 2px solid #121214;
  padding: 0 5px;
  margin-bottom: 10px;
  svg {
    color: #353434;
    margin: 0 10px;
    width: 20px;
    height: 20px;
  }
  &:focus-within {
    border-color: #fdba13;
    svg {
      color: #fdba13;
    }
  }
`;

export const Input = styled.input`
  outline: none;
  background-color: transparent;
  color: white;
  border: none;
  height: 50px;
  width: 100%;
  font-size: 15px;
`;

export const Span = styled.span`
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  opacity: 0.9;
  align-self: center;
  color: ${(props) => (props.color ? props.color : "white")};
  a {
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    opacity: 0.9;
    align-self: flex-start;
    color: #fdba13;
  }
  &:hover {
    transition: opacity 0.2s ease 0s;
    opacity: 1;
  }
`;

export const ButtonLogin = styled.button`
  width: 100%;
  cursor: pointer;
  /* background: #fdba13; */
  background: #fdba13;
  border-radius: 5px;
  border: none;
  color: white;
  font-weight: bold;
  height: 50px;
  opacity: 0.9;
  margin: 20px 0;
  font-size: 1.1em;
  &:hover {
    ${(props) =>
      props.disabled === false
        ? "transition: 0.2s ease; opacity: 1;"
        : "cursor: not-allowed;"}
  }
`;

export const RegisterContent = styled.div`
  a {
    margin-left: 5px;
  }
`;
