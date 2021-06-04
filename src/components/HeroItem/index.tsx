import React from "react";
import styled from "styled-components";
import { placeholderAvatar } from "../../assets";
import { H3 } from "../Headings";
import { Body } from "../Paragraphs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  height: 50px;
  padding: 18px;
  border-radius: 8px;
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Name = styled(H3)`
  margin-left: 20px;
`;

type PropsType = {
  imageUrl?: string;
  name: string;
  type: string;
  description: string;
};

const HeroItem = ({ imageUrl, name, type, description }: PropsType) => {
  return (
    <Container>
      <HeroContainer>
        <Avatar src={imageUrl || placeholderAvatar} />
        <Name>{name}</Name>
      </HeroContainer>
      <Body>{type}</Body>
      <Body>{description}</Body>
    </Container>
  );
};

export default HeroItem;
