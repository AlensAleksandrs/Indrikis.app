import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales(
  'LoginView.render.rendersPasswordField',
  ({ mount, router, i18n, messages, expect }) => {
    it('renders the localized password field label and prompt', async () => {
      router.push('/login')
      await router.isReady()

      const wrapper = mount(LoginView, {
        global: { plugins: [router, i18n] },
      })

      const expectedLabel = messages?.system?.form?.password?.label
      const expectedPrompt = messages?.system?.form?.password?.prompt

      const text = wrapper.text()
      expect(text).toContain(expectedLabel)

      const passwordInput = wrapper.find('input[type="password"]')
      expect(passwordInput.exists()).toBe(true)
      expect(passwordInput.attributes('placeholder')).toBe(expectedPrompt)
    })
  },
)
