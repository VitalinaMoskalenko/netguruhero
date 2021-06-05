import React, { CSSProperties } from "react";
import styled from "styled-components";
import { Body } from "../Paragraphs";

const Container = styled.button`
  height: 40px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const Text = styled(Body)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

type PropsType = {
  style?: CSSProperties;
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick, style }: PropsType) => {
  return (
    <Container style={style} onClick={onClick}>
      <Text>{text}</Text>
    </Container>
  );
};

export default Button;
