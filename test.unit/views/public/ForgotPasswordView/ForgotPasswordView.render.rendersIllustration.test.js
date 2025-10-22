import { it } from 'vitest'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales(
  'ForgotPasswordView.render.rendersIllustration',
  ({ mount, router, i18n, expect }) => {
    it('renders the illustration image', async () => {
      router.push('/forgot-password')
      await router.isReady()

      const wrapper = mount(ForgotPasswordView, {
        global: { plugins: [router, i18n] },
      })

      const img = wrapper.find('img')
      expect(img.exists()).toBe(true)
      expect(img.attributes('src')).toContain('temp_illustration.png')
    })
  },
)
