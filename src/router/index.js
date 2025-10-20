import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import TermsOfServiceView from '@/views/TermsOfServiceView.vue'
import HelpView from '@/views/HelpView.vue'

export const routes = [
  { path: '/test', name: 'test', component: HomeView },
  { path: '/', name: 'Landing Page', component: LandingView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/forgot-password', name: 'Forgot password', component: ForgotPasswordView },
  { path: '/privacy-policy', name: 'Privacy Policy', component: PrivacyPolicyView },
  { path: '/terms-of-service', name: 'Terms of Service', component: TermsOfServiceView },
  { path: '/help', name: 'Assistance', component: HelpView },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView },
]

export function createAppRouter() {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
}

export default createAppRouter()
