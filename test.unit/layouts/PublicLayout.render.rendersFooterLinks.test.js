import { it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import { runWithLocales } from '../test-utils/runWithLocales'
import { routes } from '@/router'
import PublicLayout from '@/layouts/PublicLayout.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

runWithLocales('PublicLayout.render.rendersFooterLinks', ({ i18n, expect }) => {
  it('renders footer links with correct labels and hrefs', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(PublicLayout, {
      global: { plugins: [router, i18n] },
    })

    const privacyLink = wrapper.find('a[href="/privacy-policy"]')
    const termsLink = wrapper.find('a[href="/terms-of-service"]')
    const helpLink = wrapper.find('a[href="/help"]')

    expect(privacyLink.exists()).toBe(true)
    expect(termsLink.exists()).toBe(true)
    expect(helpLink.exists()).toBe(true)

    expect(privacyLink.text()).toContain(i18n.global.t('layout.public.privacy-policy'))
    expect(termsLink.text()).toContain(i18n.global.t('layout.public.terms-of-service'))
    expect(helpLink.text()).toContain(i18n.global.t('layout.public.help'))
  })
})
