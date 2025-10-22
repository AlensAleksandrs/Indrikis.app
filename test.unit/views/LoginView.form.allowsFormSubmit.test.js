import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', component: LoginView }],
})

describe('LoginView.form.allowsFormSubmit', () => {
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
