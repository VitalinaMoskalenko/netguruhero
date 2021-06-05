import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { AppLocalsType } from "../../types";
import en from "./en";

i18n.use(initReactI18next).init({
  fallbackLng: AppLocalsType.en,
  interpolation: {
    escapeValue: false,
  },
  lng: AppLocalsType.en,
  resources: {
    en: {
      translation: en,
    },
  },
});

export default i18n;
