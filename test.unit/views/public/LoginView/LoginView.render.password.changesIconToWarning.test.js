import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.render.password.changesIconToWarning', ({ mount, router, i18n, expect }) => {
  it('shows an error icon when the password does not meet rules', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const passwordInput = wrapper.find('input[type="password"]')
    await passwordInput.setValue('short')
    await wrapper.vm.$nextTick()

    const html = wrapper.html()
    const hasErrorClass = html.includes('text-t-error')

    expect(hasErrorClass).toBe(true)
  })
})
