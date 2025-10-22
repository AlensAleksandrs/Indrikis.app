import { it } from 'vitest'
import LoginView from '@/views/LoginView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LoginView.render.rendersEmailField', ({ mount, router, i18n, messages, expect }) => {
  it('renders the localized email field label and prompt', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const expectedLabel = messages?.system?.form?.email?.label
    const expectedPrompt = messages?.system?.form?.email?.prompt

    const text = wrapper.text()
    expect(text).toContain(expectedLabel)

    const emailInput = wrapper.find('input[type="email"]')
    expect(emailInput.attributes('placeholder')).toBe(expectedPrompt)
  })
})
