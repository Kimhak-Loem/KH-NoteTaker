import i18n from 'i18n-js';
import memoize from 'lodash.memoize';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';


export const setLocale = (locale) => i18n.locale = locale;

export const getCurrentLocale = () => i18n.locale;

i18n.fallbacks = true; // If an english translation is not available in en.js, it will look inside hi.js
i18n.missingBehaviour = 'guess'; // It will convert HOME_noteTitle to "HOME note title" if the value of HOME_noteTitle doesn't exist in any of the translation files.
i18n.defaultLocale = 'en'; // If the current locale in device is not en or hi

// lazy requires (metro bundler does not support symlinks)
const translationGetters = {
  kh: () => require('../languages/kh.json'),
  en: () => require('../languages/en.json'),
  'en-US': () => require('../languages/en.json'),
  hi: () => require('../languages/hi.json'),
};

export const setI18njsConfig = (languageTag) => {
  if (i18n.locale === languageTag) {
    return;
  }

  // clear translation cache
  translate.cache.clear();
  // set i18n-js config
  // Lazy load according to languageTag
  i18n.translations = {[languageTag]: translationGetters[languageTag]()};
  // Load all languages files
  /*
  Object.keys(translationGetters).forEach((languageTag) => {
    i18n.translations[languageTag] = translationGetters[languageTag]();
  });  
  */
  i18n.locale = languageTag;
};

const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export default translate;

// find best available language with RNLocalize
export const findBestAvailableLanguage = () => {
  // fallback if no available language fits
  const fallback = {languageTag: 'en', isRTL: false};
  return RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) || fallback;
};

// set I18njs config according to the RNLocalize's findBestAvailableLanguage
export const setI18nConfigByRNLocalize = () => {
  // find best available language with RNLocalize
  const {languageTag, isRTL} = findBestAvailableLanguage();
  // update layout direction
  I18nManager.forceRTL(isRTL);
  setI18njsConfig(languageTag);
};