import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, HeroItem, Spinner } from "../../components";
import { useTranslation } from "react-i18next";
import ListHeader from "./components/ListHeader";
import { useQuery } from "react-query";
import { fetchHeroesService } from "../../services/heroes";
import { AppRouteType, Heroes } from "../../types";
import LoadMoreFooter from "./components/LoadMoreFooter";
import { useHistory } from "react-router";

const Container = styled.div`
  padding: 20px 40px;
`;

const AddHeroButton = styled(Button).attrs({
  style: {
    marginBottom: 20,
    width: 200,
  },
})``;

const HeroContainer = styled.div`
  cursor: pointer;
  margin-bottom: 12px;
`;

const baseTranslationPath = "Home.";

const Home = () => {
  const history = useHistory();
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

  const openAddHero = () => {
    history.push(AppRouteType.addHeroForm);
  };

  const openHeroDetails = (id: string) => {
    history.push(`${AppRouteType.heroDetails}/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <Container>
      <AddHeroButton
        text={t(`${baseTranslationPath}addHero`)}
        onClick={openAddHero}
      />
      <ListHeader />
      {heroes?.map((item) => (
        <HeroContainer onClick={() => openHeroDetails(item.id)} key={item.id}>
          <HeroItem
            name={item.full_name}
            type={item.type.name}
            imageUrl={item.avatar_url}
            description={item.description}
          />
        </HeroContainer>
      ))}
      {isLoading && <Spinner />}
      <LoadMoreFooter endOfListReached={endOfListReached} loadMore={loadMore} />
    </Container>
  );
};

export default Home;
