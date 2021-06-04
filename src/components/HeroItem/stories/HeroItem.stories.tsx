import React from "react";
import styled from "styled-components";
import HeroItem from "../";

const Container = styled.div`
  background-color: turquoise;
  height: 300px;
`;

export default { title: "HeroItem" };

export const defaultHeroItem = () => (
  <Container>
    <HeroItem type="Type" description="Description" name="Name" />
  </Container>
);
