import { createI18n } from 'vue-i18n'

import EN from './locales/EN.json'
import LV from './locales/LV.json'
import DE from './locales/DE.json'

export const i18n = createI18n({
  locale: 'LV',
  fallbackLocale: 'EN',
  messages: { EN, LV, DE },
})
