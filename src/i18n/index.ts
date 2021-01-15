import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './_en';
import zh from './_zh';

i18n.use(initReactI18next).init({
    resources: {
        en,
        zh,
    },
    lng: 'zh',
    keySeparator: false,
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});

export default i18n;
