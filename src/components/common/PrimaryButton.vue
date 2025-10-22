<script setup lang="ts">
defineProps<{
  action?: () => void
  type?: 'button' | 'submit' | 'reset'
}>()
</script>

<template>
  <button
    :type="type || 'button'" class="select-none w-56 md:w-64 h-10 rounded-xl bg-p-l-default dark:bg-p-d-d12 cursor-pointer hover:bg-p-l-l2 hover:dark:bg-p-d-d14 text-b-l-default dark:text-b-l-default font-regular text-sm flex items-center justify-center gap-2"
    @click="action && action()"
  >
    <slot />
  </button>
</template>

<style scoped></style>
