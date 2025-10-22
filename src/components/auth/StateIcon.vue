<script setup lang="ts">
import InvalidState from '@/components/icons/InvalidState.vue'
import ValidState from '@/components/icons/ValidState.vue'
import DefaultState from '@/components/icons/DefaultState.vue'

defineProps<{
  state?: boolean
  defined: boolean
  errorPrompt?: string
}>()
</script>

<template>
  <span class="group inline-flex">
    <ValidState
      v-if="state && defined"
      class="w-4 h-4 text-a-l-d10 dark:text-a-d-d10" />
    <InvalidState
      v-else-if="!state && defined"
      class="w-4 h-4 text-t-error dark:text-b-error" />
    <DefaultState
      v-else
      class="w-4 h-4 text-b-l-d16 dark:text-b-d-l16" />
    <span
      v-if="errorPrompt && !state && defined"
      class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block
             bg-b-l-d14 dark:bg-b-d-l10 text-xs text-t-l-default dark:text-t-d-default
             rounded-md px-2 py-1 whitespace-nowrap shadow-lg z-10">
      {{ errorPrompt }}
    </span>
  </span>
</template>
