<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <RouterLink
    :to="href ?? ''"
    class="cursor-pointer select-none text-xs font-light text-t-l-default hover:text-a-l-default hover:underline dark:text-t-d-default hover:dark:text-a-d-default md:text-sm"
  >
    <slot />
  </RouterLink>
</template>
