<script setup lang="ts">
defineProps({
  action: {
    type: Function,
    required: false,
    default: () => {},
  },
})
</script>

<template>
  <button
    class="w-56 md:w-64 h-10 rounded-xl bg-p-l-default dark:bg-p-d-d12 cursor-pointer hover:bg-p-l-l2 hover:dark:bg-p-d-d14 text-b-l-default dark:text-b-l-default font-regular text-sm flex items-center justify-center gap-2"
    @click="action"
  >
    <slot />
  </button>
</template>

<style scoped></style>
