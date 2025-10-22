import { it } from 'vitest'
import { nextTick } from 'vue'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.form.allowsFormSubmit',
  ({ mount, router, i18n, messages, expect }) => {
    it('shows the action message when a valid email is entered and submitted', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })
      const form = wrapper.find('form')

      const emailInput = wrapper.find('input[type="email"]')
      await emailInput.setValue('test@example.com')
      await form.trigger('submit.prevent')
      await nextTick()

      const expectedInfo = messages?.view?.['forgot-password']?.info?.action
      expect(wrapper.text()).toContain(expectedInfo)
    })
  },
)
