import { it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { runWithLocales } from '../test-utils/runWithLocales'
import { routes } from '@/router'
import PublicLayout from '@/layouts/PublicLayout.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

runWithLocales('PublicLayout.render.rendersLocaleSwitch', ({ i18n, expect }) => {
  it('renders the locale switcher and updates text when locale changes', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PublicLayout, {
      global: { plugins: [router, i18n] },
    })

    const switchButton = wrapper.find('button[aria-haspopup="listbox"]')
    expect(switchButton.exists()).toBe(true)

    expect(switchButton.text()).toContain(i18n.global.locale.value)

    await switchButton.trigger('click')
    const options = wrapper.findAll('ul[role="listbox"] li')
    expect(options.length).toBeGreaterThan(0)

    const newLocale = i18n.global.availableLocales.find((l) => l !== i18n.global.locale.value)
    if (newLocale) {
      const option = options.find((li) => li.text() === newLocale)
      expect(option).toBeTruthy()

      if (option) {
        await option.trigger('click')
        expect(i18n.global.locale.value).toBe(newLocale)
      }
    }
  })
})
