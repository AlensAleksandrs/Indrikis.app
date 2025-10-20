import { createI18n } from 'vue-i18n'
import EN from '@/locales/EN.json'
import LV from '@/locales/LV.json'
import DE from '@/locales/DE.json'

export function setupI18n(locale = 'LV') {
  return createI18n({
    legacy: false,
    globalInjection: true,
    locale,
    fallbackLocale: 'EN',
    messages: {
      en: EN,
      lv: LV,
      de: DE,
    },
  })
}
