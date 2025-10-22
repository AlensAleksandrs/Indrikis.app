import { it } from 'vitest'
import LoginView from '@/views/LoginView.vue'
import { runWithLocales } from '../test-utils/runWithLocales'

runWithLocales('LoginView.render.email.rendersEmailWarning', ({ mount, router, i18n, messages, expect }) => {
  it('renders the localized email warning message when input is invalid', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('not-an-email')
    await wrapper.vm.$nextTick()

    const expectedWarning = messages?.system?.form?.email?.['error-prompt']
    expect(wrapper.text()).toContain(expectedWarning)
  })
})
