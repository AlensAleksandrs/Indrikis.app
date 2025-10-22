import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales(
  'LoginView.render.password.rendersPasswordWarning',
  ({ mount, router, i18n, messages, expect }) => {
    it('renders all localized password warnings depending on rule violations', async () => {
      router.push('/login')
      await router.isReady()

      const wrapper = mount(LoginView, {
        global: { plugins: [router, i18n] },
      })

      const passwordInput = wrapper.find('input[type="password"]')
      const rules = messages?.system?.form?.password?.rules || {}

      await passwordInput.setValue('abc')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain(rules['min-length'])

      await passwordInput.setValue('lowercasepassword!')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain(rules['capital-letter'])

      await passwordInput.setValue('ValidPassword123')
      await wrapper.vm.$nextTick()
      expect(wrapper.text()).toContain(rules['special-symbol'])
    })
  },
)
