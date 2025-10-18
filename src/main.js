import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { i18n } from './i18n'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const loading = document.getElementById('loading')

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
if (loading) loading.remove()
