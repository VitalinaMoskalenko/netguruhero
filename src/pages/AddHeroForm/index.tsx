import React from "react";
import styled from "styled-components";
import { Modal } from "../../components";
import { BreakpointType } from "../../types";
import Header from "./components/Header";
import HeroForm from "./components/HeroForm";

const FormContainer = styled.div`
  margin: 40px 0px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  width: 400px;
  height: fit-content;
  @media (max-width: ${BreakpointType.xs}px) {
    width: 100%;
    margin: 0px;
  }
`;

const AddHeroForm = () => {
  return (
    <Modal>
      <FormContainer>
        <Header />
        <HeroForm />
      </FormContainer>
    </Modal>
  );
};

export default AddHeroForm;
