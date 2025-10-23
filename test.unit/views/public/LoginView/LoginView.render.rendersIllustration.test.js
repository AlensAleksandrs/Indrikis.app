import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LoginView.render.rendersIllustration', ({ mount, router, i18n, expect }) => {
  it('renders the login illustration image', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const illustration = wrapper.find('#illustration')
    expect(illustration.exists()).toBe(true)
  })
})
