<script setup lang="ts">
import { useNotifications } from '@/stores/useNotifications'
import Notification from '@/components/common/NotificationBubble.vue'

const notifications = useNotifications()
</script>

<template>
  <div
    class="fixed top-4 z-50 w-full flex justify-center px-4 sm:w-auto sm:right-4 sm:justify-end space-y-2"
  >
    <TransitionGroup name="fade" tag="div" class="flex flex-col gap-2">
      <Notification
        v-for="n in notifications.items"
        :key="n.id"
        :notification="n"
        @close="notifications.remove(n.id)"
      />
    </TransitionGroup>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
</style>
