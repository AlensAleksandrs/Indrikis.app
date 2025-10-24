<script setup lang="ts">
import { useRoute } from 'vue-router'
import PublicLayout from '@/layouts/PublicLayout.vue'
import ClientLayout from '@/layouts/ClientLayout.vue'
import DashboardLayout from '@/layouts/ClientLayout.vue'
import { useI18n } from 'vue-i18n'
import { watch } from 'vue'
import NotificationList from '@/components/common/NotificationList.vue'

const route = useRoute()

const layouts = {
  public: PublicLayout,
  client: ClientLayout,
  dashboard: DashboardLayout,
}

const { locale } = useI18n()

watch(locale, (newLocale) => {
  localStorage.setItem('locale', newLocale)
})
import { useNotifications } from '@/stores/useNotifications'
const notify = useNotifications()
notify.add('information', 'Development mode active')
</script>

<template>
  <NotificationList />
  <component :is="layouts[route.meta.layout] || PublicLayout">
    <RouterView />
  </component>
</template>

<style scoped></style>
