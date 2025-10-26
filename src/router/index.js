import { createRouter, createWebHistory } from 'vue-router'

import LandingView from '@/views/public/LandingView.vue'
import LoginView from '@/views/public/LoginView.vue'
import PrivacyPolicyView from '@/views/public/PrivacyPolicyView.vue'
import DashboardView from '@/views/client/DashboardView.vue'
import ForgotPasswordView from '@/views/public/ForgotPasswordView.vue'
import TermsOfServiceView from '@/views/public/TermsOfServiceView.vue'
import HelpView from '@/views/public/HelpView.vue'
import DocumentView from '@/views/client/DocumentView.vue'
import PageNotFoundView from '@/views/public/PageNotFoundView.vue'

export const routes = [
  { path: '/', name: 'Landing Page', component: LandingView, meta: { layout: 'public' } },
  { path: '/login', name: 'Login', component: LoginView, meta: { layout: 'public' } },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: ForgotPasswordView,
    meta: { layout: 'public' },
  },
  {
    path: '/privacy-policy',
    name: 'Privacy Policy',
    component: PrivacyPolicyView,
    meta: { layout: 'public' },
  },
  {
    path: '/terms-of-service',
    name: 'Terms of Service',
    component: TermsOfServiceView,
    meta: { layout: 'public' },
  },
  { path: '/help', name: 'Assistance', component: HelpView, meta: { layout: 'public' } },
  { path: '/dashboard', name: 'Dashboard', component: DashboardView, meta: { layout: 'client' } },
  { path: '/documents', name: 'Documents', component: DocumentView, meta: { layout: 'client' } },
  {
    path: '/:pathMatch(.*)*',
    name: 'Unknown request',
    component: PageNotFoundView,
    meta: { layout: 'public' },
  },
]

export function createAppRouter() {
  return createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  })
}

export default createAppRouter()
