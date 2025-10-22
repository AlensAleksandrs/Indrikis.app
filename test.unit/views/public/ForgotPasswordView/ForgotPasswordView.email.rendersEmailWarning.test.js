import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.email.rendersEmailWarning',
  ({ mount, router, i18n, expect, messages }) => {
    it('renders the localized email warning message when input is invalid', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const emailInput = wrapper.find('input[type="email"]')
      await emailInput.setValue('not-an-email')
      await wrapper.vm.$nextTick()

      const expectedWarning = messages?.function?.form?.email?.['error-prompt'] || ''
      expect(wrapper.text()).toContain(expectedWarning)
    })
  },
)
