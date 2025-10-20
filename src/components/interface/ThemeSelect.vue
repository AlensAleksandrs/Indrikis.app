<script setup>
import { useDark, useToggle } from '@vueuse/core'
import SunIcon from '@/assets/icons/SunIcon.svg'
import MoonIcon from '@/assets/icons/MoonIcon.svg'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    @click="toggleDark()"
    class="relative flex items-center w-12 h-6 rounded-full bg-b-l-d8 dark:bg-b-d-l6"
  >
    <span
      class="absolute z-10 w-6 h-6 rounded-full flex items-center justify-center translate-x-0 dark:translate-x-6 bg-a-l-d8 dark:bg-a-d-d12 transform transition-transform duration-500 ease-in-out"
    >
      <img :src="isDark ? MoonIcon : SunIcon" alt="theme icon" class="w-4 h-4 invert-[1]" />
    </span>
    <span class="absolute left-1 z-5">
      <img :src="SunIcon" alt="sun icon" class="w-4 h-4 invert-[1]" />
    </span>
    <span class="absolute right-1 z-5">
      <img :src="MoonIcon" alt="moon icon" class="w-4 h-4" />
    </span>
  </button>
</template>
