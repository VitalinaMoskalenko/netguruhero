import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { CloseHeader, Modal } from "../../components";
import { fetchHeroByIdService } from "../../services/heroes";
import { BreakpointType, HeroDetailsParam } from "../../types";
import Details from "./components/Details";

const Container = styled.div`
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

const HeroDetails = () => {
  const history = useHistory();
  const { id } = useParams<HeroDetailsParam>();

  const { data } = useQuery("fetchHeroById", async () =>
    fetchHeroByIdService(id)
  );

  useEffect(() => {
    console.log(data);
  }, [data]);

  const closeHeroDetail = () => {
    history.goBack();
  };

  return (
    <Modal>
      <Container>
        <CloseHeader onClose={closeHeroDetail} />
        <Details heroData={data} />
      </Container>
    </Modal>
  );
};

export default HeroDetails;
