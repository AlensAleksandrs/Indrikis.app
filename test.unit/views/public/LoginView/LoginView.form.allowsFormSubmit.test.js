import { it } from 'vitest'
import { nextTick } from 'vue'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.form.allowsFormSubmit', ({ mount, router, i18n, messages, expect }) => {
  it('shows the action message when valid credentials are entered', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')
    const form = wrapper.find('form')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('Password123!') // must satisfy your validation
    await form.trigger('submit.prevent')
    await nextTick()

    const expectedInfo = messages?.view?.login?.info?.action
    expect(wrapper.text()).toContain(expectedInfo)
  })
})
