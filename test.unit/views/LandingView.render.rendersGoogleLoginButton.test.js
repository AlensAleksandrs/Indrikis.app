import { it } from 'vitest'
import LandingView from '@/views/LandingView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LandingView.render.rendersGoogleLoginButton', ({ mount, router, i18n, expect }) => {
  it('renders the Google login button with correct label', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBeGreaterThan(1)

    const googleButton = buttons.find((b) =>
      b.text().includes(i18n.global.t('function.google.login')),
    )
    expect(googleButton).toBeTruthy()
  })
})
