import { it } from 'vitest'
import LandingView from '@/views/LandingView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LandingView.render.rendersPasswordResetLink', ({ mount, router, i18n, expect }) => {
  it('renders the password reset link with correct label', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    const link = wrapper.find('a[href*="reset"], a[href*="forgot"]')
    expect(link.exists()).toBe(true)

    const expected = i18n.global.t('view.landing.forgot-password')
    expect(link.text()).toContain(expected)
  })
})
