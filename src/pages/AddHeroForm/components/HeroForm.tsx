import { Formik, FormikHelpers } from "formik";
import React, { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useMutation, useQuery } from "react-query";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, TextArea } from "../../../components";
import Input from "../../../components/Input";
import Select from "../../../components/Select";
import { useFormikErrorMessage } from "../../../lib/hooks";
import { heroFormValidationSchema } from "../../../lib/validators";
import { createHeroService, fetchTypesService } from "../../../services/heroes";
import { AppRouteType, CreateHeroRequestType } from "../../../types";
import { HeroFormikValues } from "../../../types/pages";

const heroInitialFormikValues = {
  avatarUrl: "",
  fullName: "",
  type: "",
  description: "",
};

const baseTranslationPath = "AddHeroForm.";

const StyledInput = styled(Input).attrs({
  containerStyle: {
    margin: "20px 0px",
  },
})``;

const SubmitButton = styled(Button).attrs({
  style: {
    marginTop: "20px",
  },
})``;

const DescriptionInput = styled(TextArea).attrs({
  containerStyle: {
    margin: "20px 0px",
  },
})``;

const HeroForm = () => {
  const history = useHistory();
  const { t } = useTranslation();
  const { getErrorMessage } = useFormikErrorMessage();

  const { data } = useQuery("fetchHeroType", fetchTypesService);

  const { mutate } = useMutation(
    (heroData: CreateHeroRequestType) => createHeroService(heroData),
    {
      onSuccess: () => {
        history.goBack();
      },
    }
  );

  const [herosTypes, setHeroesTypes] = useState<string[]>([]);

  useEffect(() => {
    if (data) {
      const heroesNameTypes = data.map((item) => item.name);

      setHeroesTypes(heroesNameTypes);
    }
  }, [data]);

  const onSubmit = async (
    values: HeroFormikValues,
    { validateForm }: FormikHelpers<HeroFormikValues>
  ) => {
    await validateForm(values);

    const selectedType = data?.find((item) => item.name === values.type);

    if (selectedType) {
      const heroData: CreateHeroRequestType = {
        avatar_url: values.avatarUrl,
        full_name: values.fullName,
        description: values.description,
        type: selectedType.id,
      };
      mutate(heroData);
    }
  };

  return (
    <Formik
      initialValues={heroInitialFormikValues}
      onSubmit={onSubmit}
      validateOnChange={false}
      validationSchema={heroFormValidationSchema}
    >
      {({ handleChange, handleSubmit, values, errors }) => {
        return (
          <Fragment>
            <StyledInput
              value={values.avatarUrl}
              onChange={handleChange("avatarUrl")}
              label={t(`${baseTranslationPath}avatarUrl`)}
              errorMessage={getErrorMessage(errors.avatarUrl)}
            />
            <StyledInput
              value={values.fullName}
              onChange={handleChange("fullName")}
              label={t(`${baseTranslationPath}fullName`)}
              errorMessage={getErrorMessage(errors.fullName)}
            />
            <Select
              label={t(`${baseTranslationPath}type`)}
              onValueSelect={handleChange("type")}
              value={values.type}
              emptyText={t(`${baseTranslationPath}selectType`)}
              errorMessage={getErrorMessage(errors.type)}
              data={herosTypes}
            />
            <DescriptionInput
              value={values.description}
              onChange={handleChange("description")}
              label={t(`${baseTranslationPath}description`)}
              errorMessage={getErrorMessage(errors.description)}
            />
            <SubmitButton
              text={t(`${baseTranslationPath}save`)}
              onClick={handleSubmit}
            />
          </Fragment>
        );
      }}
    </Formik>
  );
};

export default HeroForm;
