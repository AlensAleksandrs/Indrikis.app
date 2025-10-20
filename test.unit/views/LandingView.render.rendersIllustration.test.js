import { it } from 'vitest'
import LandingView from '@/views/LandingView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LandingView.render.rendersIllustration', ({ mount, router, i18n, expect }) => {
  it('renders the illustration image', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    const illustration = wrapper.find('img')
    expect(illustration.exists()).toBe(true)
  })
})
