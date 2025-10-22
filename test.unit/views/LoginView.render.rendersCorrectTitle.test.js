import { it } from 'vitest'
import LoginView from '@/views/LoginView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LoginView.render.rendersCorrectTitle', ({ mount, router, i18n, messages, expect }) => {
  it('renders the localized login title', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const expectedTitle = messages?.view?.login?.title
    expect(wrapper.text()).toContain(expectedTitle)
  })
})
