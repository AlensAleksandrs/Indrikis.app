import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import DashboardView from '@/views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/test', name: 'test', component: HomeView, },
    { path: '/', name: 'Landing Page', component: LandingView, },
    { path: '/login', name: 'Login', component: LoginView, },
    { path: '/forgot-password', name: 'Forgot password', component: LoginView, },
    { path: '/privacy-policy', name: 'Privacy Policy', component: PrivacyPolicyView, },
    { path: '/dashboard', name: 'Dashboard', component: DashboardView, },
  ],
})

export default router
