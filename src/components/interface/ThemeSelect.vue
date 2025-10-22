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
    class="relative flex h-6 w-12 items-center rounded-full bg-b-l-d8 dark:bg-b-d-l6"
  >
    <span
      class="absolute z-10 flex h-6 w-6 items-center justify-center rounded-full bg-a-l-d8 transition-transform duration-500 ease-in-out dark:translate-x-6 dark:bg-a-d-d12"
    >
      <img :src="isDark ? MoonIcon : SunIcon" alt="theme icon" class="h-4 w-4 invert-[1]" />
    </span>
    <span class="absolute left-1">
      <img :src="SunIcon" alt="sun icon" class="h-4 w-4 invert-[1]" />
    </span>
    <span class="absolute right-1">
      <img :src="MoonIcon" alt="moon icon" class="h-4 w-4" />
    </span>
  </button>
</template>
