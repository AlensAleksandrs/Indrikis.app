<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const props = defineProps<{
  notification: {
    id: number
    type: 'success' | 'error' | 'information' | 'warning'
    message: string
  }
}>()

const emit = defineEmits(['close'])
const { t } = useI18n()
const notificationTitle = computed(() => t(`system.notification.${props.notification.type}`))
</script>

<template>
  <div
    class="flex flex-col border-l-4 items-start rounded-sm w-72 p-2 shadow-xl bg-b-l-default dark:bg-b-d-l8 cursor-pointer"
    :class="{
      'border-p-l-default dark:border-p-d-default': notification.type === 'information',
      'border-t-error': notification.type === 'error' || notification.type === 'warning',
      'border-a-l-default dark:border-a-d-d10': notification.type === 'success',
    }"
    @click="emit('close')"
  >
    <span class="text-sm md:text-md font-semibold text-t-l-default dark:text-t-d-l14">
      {{ notificationTitle }}
    </span>
    <span class="text-xs md:text-sm font-normal text-t-l-default dark:text-t-d-l14">
      {{ notification.message }}
    </span>
  </div>
</template>
