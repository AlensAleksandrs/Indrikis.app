import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.render.email.changesIconToSuccess', ({ mount, router, i18n, expect }) => {
  it('shows a success icon when a valid email is entered', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('valid@example.com')
    await wrapper.vm.$nextTick()

    const hasSuccessClass = wrapper.html().includes('text-a-l-default')
    expect(hasSuccessClass).toBe(true)
  })
})
