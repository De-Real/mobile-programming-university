import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translations
import translationEN from './src/locales/en.json';
import translationUK from './src/locales/uk.json';

// Define translations
const resources = {
  en: {translation: translationEN},
  uk: {translation: translationUK},
};

// Initialize i18next
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: 'en', // default language
    fallbackLng: 'en', // fallback language
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;
