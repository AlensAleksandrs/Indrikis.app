import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.render.email.changesIconToWarning', ({ mount, router, i18n, expect }) => {
  it('shows an error icon when the email is invalid', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('invalid-email')
    await wrapper.vm.$nextTick()

    const html = wrapper.html()
    const hasErrorClass = html.includes('text-t-error')

    expect(hasErrorClass).toBe(true)
  })
})
