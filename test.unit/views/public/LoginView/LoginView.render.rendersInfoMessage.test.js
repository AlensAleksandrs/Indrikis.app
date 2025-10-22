import { it } from 'vitest'
import LoginView from '@/views/public/LoginView.vue'
import { runWithLocales } from '../../../test-utils/runWithLocales.ts'

runWithLocales('LoginView.render.rendersInfoMessage', ({ mount, router, i18n, messages, expect }) => {
  it('renders the default localized info message', async () => {
    router.push('/login')
    await router.isReady()

    const wrapper = mount(LoginView, {
      global: { plugins: [router, i18n] },
    })

    const expectedInfo = messages?.view?.login?.info?.default
    expect(wrapper.text()).toContain(expectedInfo)
  })
})
