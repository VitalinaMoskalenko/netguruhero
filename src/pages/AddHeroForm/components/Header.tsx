import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Body, H3 } from "../../../components";
import { AppRouteType } from "../../../types";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CloseButton = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: ${({ theme }) => theme.colors.gray};
`;
const Close = styled(Body)`
  color: ${({ theme }) => theme.colors.black05};
`;
const baseTranslationPath = "AddHeroForm.";

const Header = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const CloseAddHero = () => {
    history.replace(AppRouteType.home);
  };
  return (
    <Container>
      <H3>{t(`${baseTranslationPath}headerTitle`)}</H3>
      <CloseButton onClick={CloseAddHero}>
        <Close>x</Close>
      </CloseButton>
    </Container>
  );
};

export default Header;
