import React, { useMemo } from "react";
import emojis from "../../Utils/emojis";
import { Container, Profile, Welcome, UserName } from "./styles";
// components

const MainHeader = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);
  return (
    <Container>
      <Profile>
        <Welcome>Olá,{emoji}</Welcome>
        <UserName>Marcelo Alves</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
