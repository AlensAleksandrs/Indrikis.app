import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.js'

runWithLocales('LoginView.render.password.changesIconToSuccess', ({ mount, router, i18n, expect }) => {
  it('shows a success icon when a valid password is entered', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const passwordInput = wrapper.find('input[type="password"]')
    await passwordInput.setValue('ValidPass123!')
    await wrapper.vm.$nextTick()

    const html = wrapper.html()
    const hasSuccessClass = html.includes('text-a-l-default')

    expect(hasSuccessClass).toBe(true)
  })
})
