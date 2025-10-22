import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('ForgotPasswordView.form.allowsFormSubmit', ({ mount, router, i18n, expect }) => {
  it('submits the form when a valid email is entered', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('test@example.com')

    const button = wrapper.find('button')
    await button.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('submit')
    expect(wrapper.emitted('submit')[0][0]).toEqual({
      email: 'test@example.com',
    })
  })
})
