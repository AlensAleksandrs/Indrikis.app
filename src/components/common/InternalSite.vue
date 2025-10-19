<script setup>
defineProps({ href: { type: String, default: '' } })
</script>

<template>
  <RouterLink
    class="text-xs md:text-sm font-light text-t-l-default dark:text-t-d-default cursor-pointer hover:text-t-l-l4 hover:dark:text-t-d-l4 hover:underline"
    :to="href"
  >
    <slot />
  </RouterLink>
</template>

<style scoped></style>
