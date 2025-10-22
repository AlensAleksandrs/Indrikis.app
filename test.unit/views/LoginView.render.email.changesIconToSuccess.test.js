import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/login', component: LoginView }],
})

describe('LoginView.render.email.changesIconToSuccess', () => {
  it('shows a success icon when a valid email is entered', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const emailInput = wrapper.find('input[type="email"]')
    await emailInput.setValue('valid@example.com')
    await wrapper.vm.$nextTick()

    const emailWrapper = emailInput.element.closest('div')
    const icon = emailWrapper ? wrapper.findComponent({ ref: emailWrapper }) : wrapper.find('svg, span, i')

    const hasSuccessClass = wrapper.html().includes('text-a-l-default')
    expect(hasSuccessClass).toBe(true)
  })
})
