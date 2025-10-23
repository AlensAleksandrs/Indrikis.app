<script setup lang="ts">
defineProps<{
  action?: () => void
  icon?: string
}>()
</script>

<template>
  <button
    class="cursor-pointer flex h-9 w-56 items-center justify-center gap-2 rounded-xl text-sm font-normal text-t-l-default outline-2 outline-p-l-default hover:outline-p-l-d6 dark:text-b-l-default dark:outline-p-d-d12 hover:dark:outline-p-d-d6 md:w-64"
    @click="action?.()"
  >
    <slot />
  </button>
</template>
