import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { SmallBody } from "../../../components";
import { BreakpointType } from "../../../types";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;

  @media (max-width: ${BreakpointType.xs}px) {
    display: none;
  }
`;

const HeaderTitle = styled(SmallBody)`
  flex: 1;
  font-weight: bold;
`;

const baseTranslationPath = "Home.";

const ListHeader = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <HeaderTitle>{t(`${baseTranslationPath}heroes`)}</HeaderTitle>
      <HeaderTitle>{t(`${baseTranslationPath}type`)}</HeaderTitle>
      <HeaderTitle>{t(`${baseTranslationPath}description`)}</HeaderTitle>
    </Container>
  );
};

export default ListHeader;
