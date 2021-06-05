import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Body, Button, HeroItem } from "../../components";
import { useTranslation } from "react-i18next";
import ListHeader from "./components/ListHeader";
import { useQuery } from "react-query";
import { fetchHeroesService } from "../../services/heroes";
import { Heroes } from "../../types";

const Container = styled.div`
  padding: 20px 40px;
`;

const AddHeroButton = styled(Button).attrs({
  style: {
    marginBottom: 20,
    width: 200,
  },
})``;

const LoadMoreContainer = styled.div`
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

const HeroContainer = styled.div`
  margin-bottom: 12px;
`;

const baseTranslationPath = "Home.";

const Home = () => {
  const { t } = useTranslation();

  const [heroes, setHeroes] = useState<Heroes[]>([]);
  const [itemSkip, setItemSkip] = useState(0);

  const { data, refetch, isLoading } = useQuery("fetchHeroes", async () =>
    fetchHeroesService(10, itemSkip)
  );

  const endOfListReached = data && data?.total_count === heroes.length;

  useEffect(() => {
    if (data?.data) {
      setHeroes([...heroes, ...data?.data]);
    }
  }, [data]);

  useEffect(() => {
    if (!endOfListReached) {
      refetch();
    }
  }, [itemSkip]);

  const loadMore = () => {
    setItemSkip(itemSkip + 10);
  };

  return (
    <Container>
      <AddHeroButton
        text={t(`${baseTranslationPath}addHero`)}
        onClick={() => {}}
      />
      <ListHeader />
      {heroes?.map((item) => (
        <HeroContainer key={item.id}>
          <HeroItem
            name={item.full_name}
            type={item.type.name}
            imageUrl={item.avatar_url}
            description={item.description}
          />
        </HeroContainer>
      ))}
      <LoadMoreContainer>
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
      </LoadMoreContainer>
    </Container>
  );
};

export default Home;
