<script setup lang="ts">
defineProps<{
  action?: () => void
  type?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    class="flex h-10 w-56 select-none items-center justify-center gap-2 rounded-xl bg-p-l-default text-sm font-normal text-b-l-default hover:bg-p-l-l2 dark:bg-p-d-d12 dark:text-b-l-default hover:dark:bg-p-d-d14 md:w-64"
    @click="action?.()"
  >
    <slot />
  </button>
</template>
