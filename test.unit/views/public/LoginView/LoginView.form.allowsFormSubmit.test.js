import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.form.allowsFormSubmit', ({ mount, router, i18n, expect }) => {
  it('submits the form when valid credentials are entered', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    const passwordInput = wrapper.find('input[type="password"]')
    const form = wrapper.find('form')

    await emailInput.setValue('test@example.com')
    await passwordInput.setValue('password123')

    await form.trigger('submit.prevent')

    expect(wrapper.emitted()).toHaveProperty('submit')
    expect(wrapper.emitted('submit')[0][0]).toEqual({
      email: 'test@example.com',
      password: 'password123',
    })
  })
})
