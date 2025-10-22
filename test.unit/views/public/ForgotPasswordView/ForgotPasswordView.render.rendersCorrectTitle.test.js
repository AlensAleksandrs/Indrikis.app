import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.render.rendersCorrectTitle',
  ({ mount, router, i18n, expect }) => {
    it('renders the localized forgot password title', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const expectedTitle = i18n.global.t('view.forgot-password.title')
      expect(wrapper.text()).toContain(expectedTitle)
    })
  },
)
