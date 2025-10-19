import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    layout?: 'public' | 'auth' | 'dashboard'
    requiresAuth?: boolean
  }
}
