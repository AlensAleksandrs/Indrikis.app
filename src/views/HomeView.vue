<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="text-t-l-default dark:text-t-d-default">
    <h2>You are currently accessing src/views/HomeView.vue</h2>
    <button @click="toggleDark()">Press to switch theme</button>
    <p>Dark mode: {{ isDark }}</p>
  </div>
</template>
