import React from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router";
import { CloseHeader } from "../../../components";

const baseTranslationPath = "AddHeroForm.";

const Header = () => {
  const history = useHistory();
  const { t } = useTranslation();

  const closeAddHero = () => {
    history.goBack();
  };

  return (
    <CloseHeader
      title={t(`${baseTranslationPath}headerTitle`)}
      onClose={closeAddHero}
    />
  );
};

export default Header;
