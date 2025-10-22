import { it } from 'vitest'
import LoginView from '@/views/LoginView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LoginView.render.rendersLoginButton', ({ mount, router, i18n, messages, expect }) => {
  it('renders the localized login button', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const expectedText = messages?.view?.login?.['form-submit']
    const button = wrapper.find('button[type="submit"]')

    expect(button.exists()).toBe(true)
    expect(button.text()).toBe(expectedText)
  })
})
