import * as yup from "yup";

const baseTranslationPath = "AddHeroForm.errors.";

export const heroFormValidationSchema = yup.object().shape({
  avatarUrl: yup
    .string()
    .required(`${baseTranslationPath}avatarUrlEmpty`)
    .url(`${baseTranslationPath}avatarNotUrl`),
  fullName: yup.string().required(`${baseTranslationPath}nameEmpty`),
  type: yup.string().required(`${baseTranslationPath}typeEmpty`),
  description: yup.string().required(`${baseTranslationPath}descriptionEmpty`),
});
