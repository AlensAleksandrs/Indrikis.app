import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '@/router'

export function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes,
  })
}
