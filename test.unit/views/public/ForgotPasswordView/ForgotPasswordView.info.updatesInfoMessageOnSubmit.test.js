import { it } from 'vitest'
import { nextTick } from 'vue'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.info.updatesInfoMessageOnSubmit',
  ({ mount, router, i18n, messages, expect }) => {
    it('updates the info message to the action state after submit', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const emailInput = wrapper.find('input[type="email"]')
      const form = wrapper.find('form')

      await emailInput.setValue('test@example.com')

      await form.trigger('submit.prevent')
      await nextTick()

      const expectedInfo = messages?.view?.['forgot-password']?.info?.action
      expect(wrapper.text()).toContain(expectedInfo)
    })
  },
)
