import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import locale from 'react-native-locale-detector';
import {AsyncStorage} from 'react-native'

import resource from '../translations/resource.json';

const STORAGE_KEY = '@APP:languageCode';

const languageDetector = {
    init: Function.prototype,
    type: 'languageDetector',
    async: true, // flags below detection to be async
    detect: async (callback) => {
        const savedDataJSON = await AsyncStorage.getItem(STORAGE_KEY);
        const lng = (savedDataJSON) ? savedDataJSON : null;
        const selectLanguage = lng || locale;
        console.log('detect - selectLanguage:', selectLanguage);
        callback(selectLanguage);
    },
    cacheUserLanguage: () => { }
};


i18n
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        resources: resource,
        fallbackLng: 'es',
        debug: true,
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;