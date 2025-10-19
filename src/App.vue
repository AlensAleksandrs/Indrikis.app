<script setup lang="ts">
import { useRoute } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const route = useRoute()

const layouts = {
  public: PublicLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
}
</script>

<template>
  <component :is="layouts[route.meta.layout] || PublicLayout">
    <RouterView />
  </component>
</template>

<style scoped></style>
