import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.render.rendersSubmitButton',
  ({ mount, router, i18n, expect }) => {
    it('renders the submit button with the localized label', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const button = wrapper.find('button')
      expect(button.exists()).toBe(true)

      const expectedText = i18n.global.t('view.forgot-password.form-submit')
      expect(button.text()).toBe(expectedText)
    })
  },
)
