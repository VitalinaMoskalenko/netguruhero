import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Circle = styled.circle`
  stroke: ${({ theme }) => theme.colors.green};
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
`;

const Spinner = () => (
  <Container>
    <StyledSpinner viewBox="0 0 50 50">
      <Circle cx="25" cy="25" r="20" fill="none" strokeWidth="4" />
    </StyledSpinner>
  </Container>
);

export default Spinner;
