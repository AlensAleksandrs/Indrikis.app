import { describe, expect } from 'vitest'
import { createRouter, createMemoryHistory } from 'vue-router'
import { mount } from '@vue/test-utils'
import { setupI18n } from './i18n'
import { routes } from '@/router'

const localeModules = import.meta.glob('@/locales/**/*.json', { eager: true })
const LOCALES: Record<string, unknown> = {}

for (const [path, mod] of Object.entries(localeModules)) {
  const match = path.match(/locales\/([A-Za-z0-9_-]+)\/[A-Za-z0-9_-]+\.json$/)
  if (match) {
    LOCALES[match[1].toLowerCase()] = mod
  }
}

export function runWithLocales(name, runner) {
  describe(name, () => {
    for (const [locale, messages] of Object.entries(LOCALES)) {
      describe(`Locale: ${locale.toUpperCase()}`, () => {
        const router = createRouter({
          history: createMemoryHistory(),
          routes,
        })

        const i18n = setupI18n(locale)

        runner({ mount, router, i18n, messages, expect })
      })
    }
  })
}
