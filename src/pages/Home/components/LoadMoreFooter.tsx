import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Body, Button } from "../../../components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoadMoreButton = styled(Button).attrs(({ theme }) => {
  return {
    style: {
      backgroundColor: theme.colors.blue,
      width: 200,
    },
  };
})``;

const NoLoadMoreHeroesText = styled(Body)`
  font-weight: bold;
`;

const baseTranslationPath = "Home.";

type PropsType = {
  endOfListReached: boolean | undefined;
  loadMore: () => void;
};

const LoadMoreFooter = ({ endOfListReached, loadMore }: PropsType) => {
  const { t } = useTranslation();

  return (
    <Container>
      {!endOfListReached ? (
        <LoadMoreButton
          onClick={loadMore}
          text={t(`${baseTranslationPath}loadMore`)}
        />
      ) : (
        <NoLoadMoreHeroesText>
          {t(`${baseTranslationPath}noMoreLoadHeroes`)}
        </NoLoadMoreHeroesText>
      )}
    </Container>
  );
};

export default LoadMoreFooter;
