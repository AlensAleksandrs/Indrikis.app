<script setup lang="ts">
import DefaultState from '@/components/icons/DefaultState.vue'
import InvalidState from '@/components/icons/InvalidState.vue'
import ValidState from '@/components/icons/ValidState.vue'

defineProps<{
  state?: boolean
  defined: boolean
  errorPrompt?: string
}>()
</script>

<template>
  <span>
    <span class="group/icon relative">
      <ValidState v-if="state && defined" class="w-4 h-4 text-a-l-d10 dark:text-a-d-d10" />
      <InvalidState v-else-if="!state && defined" class="w-4 h-4 text-t-error dark:text-b-error" />
      <DefaultState v-else class="w-4 h-4 text-b-l-d16 dark:text-b-d-l16" />
      <span
        v-if="errorPrompt && !state && defined"
        class="absolute bottom-full sm:left-3/4 z-10 mb-8 sm:mb-4 block sm:hidden -translate-x-48 sm:-translate-x-1/2 whitespace-nowrap rounded-md bg-b-l-d14 px-2 py-1 text-xs text-t-l-default shadow-lg dark:bg-b-d-l10 dark:text-t-d-default group-hover/icon:block"
      >
        {{ errorPrompt }}
      </span>
    </span>
  </span>
</template>
