import { it } from 'vitest'
import LandingView from '@/views/LandingView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LandingView locale', ({ mount, router, i18n, expect }) => {
  it('loads without crashing', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(LandingView, {
      global: { plugins: [router, i18n] },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
