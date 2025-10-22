import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales(
  'LoginView.render.rendersForgotPasswordLink',
  ({ mount, router, i18n, messages, expect }) => {
    it('renders the localized forgot password link', async () => {
      router.push('/login')
      await router.isReady()

      const wrapper = mount(LoginView, {
        global: { plugins: [router, i18n] },
      })

      const expectedLinkText = messages?.view?.login?.['forgot-password']
      expect(wrapper.text()).toContain(expectedLinkText)

      const link = wrapper.find('a[href*="forgot-password"]')
      expect(link.exists()).toBe(true)
      expect(link.text()).toBe(expectedLinkText)
    })
  },
)
