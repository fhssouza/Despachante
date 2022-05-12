import styled from "styled-components";

export const Container = styled.div`
  grid-area: AS;
  color: #fff;
  background-color: #111;
  padding-left: 0 20px;
  border-right: #fdba13 solid 1px;
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogImg = styled.img`
  width: 100px;
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  color: #fdba13;
  text-decoration: none;
  transition: opacity 0.3s;
  margin: 7px 0;
  padding: 0 30px;

  &:hover {
    opacity: 0.7;
  }
  > svg {
    font-size: 18px;
    margin-right: 5px;
  }
`;
