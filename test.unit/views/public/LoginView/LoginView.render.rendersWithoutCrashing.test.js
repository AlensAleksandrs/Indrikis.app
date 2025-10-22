import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LoginView.render.rendersWithoutCrashing', ({ mount, router, i18n, expect }) => {
  it('renders without crashing', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
