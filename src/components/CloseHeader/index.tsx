import React from "react";
import styled from "styled-components";
import { Body } from "../Paragraphs";
import { H3 } from "../Headings";

type PropsType = {
  title?: string;
  onClose: () => void;
};

type ContainerPropsType = {
  hasTitle: boolean;
};

const Container = styled.div<ContainerPropsType>`
  display: flex;
  justify-content: ${({ hasTitle }) =>
    hasTitle ? "space-between" : "flex-end"};
`;
const CloseButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
const Close = styled(Body)`
  color: ${({ theme }) => theme.colors.black05};
`;

const CloseHeader = ({ title, onClose }: PropsType) => {
  return (
    <Container hasTitle={!!title}>
      {title && <H3>{title}</H3>}
      <CloseButton onClick={onClose}>
        <Close>x</Close>
      </CloseButton>
    </Container>
  );
};

export default CloseHeader;
