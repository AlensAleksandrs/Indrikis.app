<script setup lang="ts">
import { useRoute } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'
import DashboardLayout from '@/layouts/ClientLayout.vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'

const route = useRoute()

const layouts = {
  public: PublicLayout,
  auth: AuthLayout,
  dashboard: DashboardLayout,
}

const { locale } = useI18n()

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
</script>

<template>
  <component :is="layouts[route.meta.layout] || PublicLayout">
    <RouterView />
  </component>
</template>

<style scoped></style>
