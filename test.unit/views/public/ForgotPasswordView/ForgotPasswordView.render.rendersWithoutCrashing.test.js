import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('ForgotPasswordView.render.rendersWithoutCrashing', ({ mount, router, i18n, expect }) => {
  it('mounts the ForgotPasswordView without crashing', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
