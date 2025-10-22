import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', component: LoginView }],
})

describe('LoginView.render.password.changesIconToSuccess', () => {
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
