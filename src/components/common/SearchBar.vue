<script setup lang="ts"></script>

<template>
  <input
    :class="[
      'h-12 w-full select-none rounded-md border px-4 text-xs',
      'bg-b-l-d8 text-t-l-d10 border-b-l-d8 font-normal',
      'dark:bg-b-d-l10 dark:text-t-d-default dark:border-b-d-l10',
      'outline-none focus:shadow-none focus:ring-0',
      'focus:outline-p-l-default focus:dark:outline-p-d-d10 pl-10',
    ]"
    placeholder="I am looking for..."
  />
</template>

<style scoped></style>
