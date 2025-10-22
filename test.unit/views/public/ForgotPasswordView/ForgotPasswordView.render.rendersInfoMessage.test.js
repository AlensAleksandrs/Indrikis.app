import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('ForgotPasswordView.render.rendersInfoMessage', ({ mount, router, i18n, expect }) => {
  it('renders the InfoMessage component with the idle state by default', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    const infoMessage = wrapper.findComponent({ name: 'InfoMessage' })
    expect(infoMessage.exists()).toBe(true)
  })
})
