<script setup>
defineProps({ href: { type: String, default: '' } })
</script>

<template>
  <RouterLink
    class="text-xs select-none md:text-sm font-light text-t-l-default dark:text-t-d-default cursor-pointer hover:text-a-l-default hover:dark:text-a-d-default hover:underline"
    :to="href"
  >
    <slot />
  </RouterLink>
</template>

<style scoped></style>
