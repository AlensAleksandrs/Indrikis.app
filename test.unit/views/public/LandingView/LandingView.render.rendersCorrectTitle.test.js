import { it } from 'vitest'
import LandingView from '@/views/public/LandingView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales(
  'LandingView.render.rendersCorrectWelcomeMessage',
  ({ mount, router, i18n, expect }) => {
    it('renders the correct welcome message for each locale', async () => {
      for (const locale of i18n.global.availableLocales) {
        i18n.global.locale.value = locale

        router.push('/')
        await router.isReady()

        const wrapper = mount(LandingView, {
          global: { plugins: [router, i18n] },
        })

        const expected = i18n.global.t('view.landing.title')
        expect(wrapper.text()).toContain(expected)
      }
    })
  },
)
