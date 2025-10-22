import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('ForgotPasswordView.info.updatesInfoMessageOnSubmit', ({ mount, router, i18n, expect }) => {
  it('updates the info message when the form is submitted', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    expect(wrapper.html()).toContain('text-t-l-default')

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('test@example.com')
    const button = wrapper.find('button')
    await button.trigger('click')
    await wrapper.vm.$nextTick()

    const html = wrapper.html()
    const hasUpdated =
      html.includes('text-a-l-default') || html.includes('text-t-error')

    expect(hasUpdated).toBe(true)
  })
})
