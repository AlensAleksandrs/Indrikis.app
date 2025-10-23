<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '@/assets/icons/SunIcon.svg'
import MoonIcon from '@/assets/icons/MoonIcon.svg'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="cursor-pointer relative flex h-6 w-12 items-center rounded-full bg-b-l-d8 dark:bg-b-d-l6">
    <span
      class="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-a-l-d8 transition-transform duration-500 ease-in-out dark:translate-x-6 dark:bg-a-d-d12">
      <MoonIcon v-if="isDark" class="text-white"/>
      <SunIcon v-else class="text-white"/>
    </span>
    <span class="absolute left-1">
      <SunIcon class="text-t-d-d10"/>
    </span>
    <span class="absolute right-1">
      <MoonIcon class="text-t-l-l10"/>
    </span>
  </button>
</template>
