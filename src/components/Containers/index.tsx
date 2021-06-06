import styled from "styled-components";

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.colors.black05};
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
