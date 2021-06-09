import React from "react";
import { useTranslation } from "react-i18next";
import { useMutation } from "react-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Body, H4, H5 } from "../../../components";
import { deleteHeroByIdService } from "../../../services/heroes";
import { AppRouteType, Heroes } from "../../../types";

type PropsType = {
  heroData?: Heroes;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AvatartImg = styled.img`
  width: 150px;
  border-radius: 75px;
  margin-bottom: 20px;
`;

const Type = styled(Body)`
  margin-bottom: 20px;
`;

const DeleteButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  cursor: pointer;
`;

const DeleteHero = styled(H5)`
  color: ${({ theme }) => theme.colors.red};
`;

const Icon = styled(H5)`
  margin-right: 10px;
  color: ${({ theme }) => theme.colors.red};
`;

const baseTranslation = "HeroDetails.";

const Details = ({ heroData }: PropsType) => {
  const { t } = useTranslation();
  const history = useHistory();

  const { mutate } = useMutation((id: string) => deleteHeroByIdService(id), {
    onSuccess: () => {
      history.goBack();
    },
  });

  const deleteHero = () => {
    heroData && mutate(heroData.id);
  };

  return heroData ? (
    <Container>
      <AvatartImg src={heroData.avatar_url} />
      <H4>{heroData.full_name}</H4>
      <Type>{heroData.type.name}</Type>
      <Body>{heroData.description}</Body>
      <DeleteButton onClick={deleteHero}>
        <Icon>&#9760;</Icon>
        <DeleteHero>{t(`${baseTranslation}deleteButton`)}</DeleteHero>
      </DeleteButton>
    </Container>
  ) : null;
};

export default Details;
