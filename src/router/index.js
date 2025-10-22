import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/LandingView.vue'
import LoginView from '@/views/LoginView.vue'
import PrivacyPolicyView from '@/views/PrivacyPolicyView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ForgotPasswordView from '@/views/ForgotPasswordView.vue'
import TermsOfServiceView from '@/views/TermsOfServiceView.vue'
import HelpView from '@/views/HelpView.vue'

export const routes = [
  { path: '/', name: 'Landing Page', component: LandingView, meta: {layout: "public"} },
  { path: '/login', name: 'Login', component: LoginView, meta: {layout: "public"} },
  { path: '/forgot-password', name: 'Forgot password', component: ForgotPasswordView, meta: {layout: "public"} },
  { path: '/privacy-policy', name: 'Privacy Policy', component: PrivacyPolicyView, meta: {layout: "public"} },
  { path: '/terms-of-service', name: 'Terms of Service', component: TermsOfServiceView, meta: {layout: "public"} },
  { path: '/help', name: 'Assistance', component: HelpView, meta: {layout: "public"} },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: {layout: "client"} },
]

export function createAppRouter() {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
}

export default createAppRouter()
