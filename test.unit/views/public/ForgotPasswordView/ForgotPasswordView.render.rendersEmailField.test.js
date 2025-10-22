import { runWithLocales } from '../../../test-utils/runWithLocales.js'
import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'

runWithLocales('ForgotPasswordView.render.rendersEmailField', ({ mount, router, i18n, expect, messages }) => {
  it('renders the localized email field label and prompt', async () => {
    router.push('/forgot-password')
    await router.isReady()

    const wrapper = mount(ForgotPasswordView, {
      global: { plugins: [router, i18n] },
    })

    const expectedLabel = messages?.system?.form?.email?.label
    const expectedPrompt = messages?.system?.form?.email?.prompt

    const text = wrapper.text()
    expect(text).toContain(expectedLabel)

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.attributes('placeholder')).toBe(expectedPrompt)
  })
})
