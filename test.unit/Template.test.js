import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/i18n'

import App from '../src/App.vue'
import HomeView from '../src/views/HomeView.vue'

const routes = [{ path: '/', component: HomeView }]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

describe('App.vue', () => {
  it('renders App and mounts HomeView on "/" route', async () => {
    router.push('/')
    await router.isReady()

    const wrapper = mount(App, {
      global: {
        plugins: [router, i18n],
      },
    })

    expect(wrapper.html()).toContain('Jūs pašlaik piekļūstat src/views/HomeView.vue')
  })
})
