import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import MeSummaryEN from "@/markdown/MeSummary.mdx";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      nav: {
        about: "About me",
        skills: "Skills",
        portfolio: "Portfolio",
        blog: "Blog",
      },
      about: {
        content: MeSummaryEN,
        links: {
          linkedin: "https://www.linkedin.com/in/alexandre-bertrand-0b1b2b1b1/",
          email: "mailto:maieul.chevalier@gmail.com",
        },
      },
    },
  },
  fr: {
    translation: {
      nav: {
        about: "À propos de moi",
        skills: "Compétences",
        portfolio: "Portfolio",
        blog: "Blog",
      },
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    returnObjects: true,
  });

export default i18n;
