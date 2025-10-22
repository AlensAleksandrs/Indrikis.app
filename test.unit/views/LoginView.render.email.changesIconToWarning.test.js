import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', component: LoginView }],
})

describe('LoginView.render.email.changesIconToWarning', () => {
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
