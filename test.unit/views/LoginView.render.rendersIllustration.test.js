import { it } from 'vitest'
import LoginView from '@/views/LoginView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LoginView.render.rendersIllustration', ({ mount, router, i18n, expect }) => {
  it('renders the login illustration image', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const illustration = wrapper.find('img')
    expect(illustration.exists()).toBe(true)
    expect(illustration.attributes('src')).toBeTruthy()
  })
})
