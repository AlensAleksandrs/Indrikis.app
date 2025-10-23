import { createI18n } from 'vue-i18n'

import EN from '@/locales/EN/EN.json'
import LV from '@/locales/LV/LV.json'
import DE from '@/locales/DE/DE.json'

const defaultLocale = 'LV'

const savedLocale = localStorage.getItem('locale') || defaultLocale

export const i18n = createI18n({
  globalInjection: true,
  locale: savedLocale,
  fallbackLocale: 'EN',
  messages: { EN, LV, DE },
})
