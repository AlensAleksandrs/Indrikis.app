import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.email.changesIconToWarning',
  ({ mount, router, i18n, expect }) => {
    it('shows an error icon when the email is invalid', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const emailInput = wrapper.find('input[type="email"]')
      await emailInput.setValue('invalid-email')
      await wrapper.vm.$nextTick()

      const emailWrapper = emailInput.element.closest('div')
      const html = emailWrapper ? emailWrapper.outerHTML : wrapper.html()

      expect(html).toContain('text-t-error')
    })
  },
)
