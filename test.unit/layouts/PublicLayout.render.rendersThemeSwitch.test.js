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

runWithLocales('PublicLayout.render.rendersThemeSwitch', ({ i18n, expect }) => {
  it('renders theme switcher and toggles dark mode', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PublicLayout, {
      global: { plugins: [router, i18n] },
    })

    const toggle = wrapper.find('button.relative.flex.items-center')
    expect(toggle.exists()).toBe(true)

    expect(document.documentElement.classList.contains('dark')).toBe(false)

    await toggle.trigger('click')
    expect(document.documentElement.classList.contains('dark')).toBe(true)

    await toggle.trigger('click')
    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })
})
