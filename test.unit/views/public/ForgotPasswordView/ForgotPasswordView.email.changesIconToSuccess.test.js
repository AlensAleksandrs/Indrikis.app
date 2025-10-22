import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('ForgotPasswordView.email.changesIconToSuccess', ({ mount, router, i18n, expect }) => {
  it('shows a success icon when a valid email is entered', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('valid@example.com')
    await wrapper.vm.$nextTick()

    const html = wrapper.html()
    const hasSuccessClass = html.includes('text-a-l-d10')

    expect(hasSuccessClass).toBe(true)
  })
})
