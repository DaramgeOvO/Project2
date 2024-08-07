import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.div``;

const Img = styled.div`
  height: 600px;
  background-color: gray;
`;

const MenuBar = styled.div`
  background-color: darkgray;
  height: 90px;

  display: grid;
  grid-template-columns: 1.7fr 1fr 1fr 1fr 1.7fr;
`;

const MenuTitle = styled(Link)`
  margin: 25px;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  text-align: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
`;

const Line = styled.div`
  height: 5px;
  background-color: black;
  width: 150px;
`;
const Blank = styled.div`
  background-color: beige;
  height: 300px;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: 550;
  padding: 100px;
`;

export function About() {
  return (
    <>
      <Header>
        <Img></Img>
        <MenuBar>
          <div></div>
          <TitleWrapper>
            <MenuTitle to="/about">About Us</MenuTitle>
            <Line></Line>
          </TitleWrapper>
          <MenuTitle to="/curriculum">커리큘럼</MenuTitle>
          <MenuTitle to="/address">오시는 길</MenuTitle>
          <div></div>
        </MenuBar>
      </Header>
      <Container>
        <Blank></Blank>
        <Title>인투어학원은</Title>
      </Container>
    </>
  );
}
