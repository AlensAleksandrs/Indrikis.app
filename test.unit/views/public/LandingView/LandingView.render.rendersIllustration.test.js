import { it } from 'vitest'
import LandingView from '@/views/public/LandingView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LandingView.render.rendersIllustration', ({ mount, router, i18n, expect }) => {
  it('renders the illustration image', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    const illustration = wrapper.find('#illustration')
    expect(illustration.exists()).toBe(true)
  })
})
