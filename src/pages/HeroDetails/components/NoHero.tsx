import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import styled from "styled-components";
import { H1, Button } from "../../../components";
import { AppRouteType } from "../../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NoHeroText = styled(H1)`
  margin: 40px 0px;
`;

const baseTranslationPath = "HeroDetails.";

const NoHero = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const navigateToHomePage = () => {
    history.replace(AppRouteType.home);
  };

  return (
    <Container>
      <NoHeroText>{t(`${baseTranslationPath}thereIsNoSuchHero`)}</NoHeroText>
      <Button
        text={t(`${baseTranslationPath}visitHomePage`)}
        onClick={navigateToHomePage}
      />
    </Container>
  );
};

export default NoHero;
