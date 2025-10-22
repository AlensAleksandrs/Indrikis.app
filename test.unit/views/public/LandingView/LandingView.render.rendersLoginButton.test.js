import { it } from 'vitest'
import LandingView from '@/views/public/LandingView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LandingView.render.rendersLoginButton', ({ mount, router, i18n, expect }) => {
  it('renders the primary login button with correct label', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    const button = wrapper.find('button')
    expect(button.exists()).toBe(true)

    const expected = i18n.global.t('view.landing.login')
    expect(button.text()).toContain(expected)
  })
})
