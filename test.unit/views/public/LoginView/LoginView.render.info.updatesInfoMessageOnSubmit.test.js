import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LoginView.render.info.updatesInfoMessageOnSubmit', ({ mount, router, i18n, messages, expect }) => {
  it('updates the info message to the action state after submit', async () => {
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
    await wrapper.vm.$nextTick()

    const expectedInfo = messages?.view?.login?.info?.action
    expect(wrapper.text()).toContain(expectedInfo)
  })
})
