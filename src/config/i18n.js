// src/config/i18n.js
import * as Localization from 'expo-localization';
import {I18n} from 'i18n-js';
import en from '../data/en.json';
import tr from '../data/tr.json';

const i18n = new I18n({
  en,
  tr
});

i18n.locale = Localization.locale.includes('tr') ? 'tr' : 'en';  // Locale kontrolü
i18n.enableFallback = true;

export default i18n;
