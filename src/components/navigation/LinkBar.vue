<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

interface NavItem {
  title: string
  icon: string
  link: string
}

defineProps<{
  map: NavItem[]
}>()
</script>

<template>
  <nav
    class="fixed bottom-0 left-0 right-0 bg-b-l-default dark:bg-b-d-default shadow-md flex justify-around py-2"
  >
    <RouterLink
      v-for="item in map"
      :key="item.link"
      :to="'/' + item.link"
      class="flex flex-col items-center text-xs text-t-l-default dark:text-t-d-default hover:text-p-l-default dark:hover:text-p-d-default transition-colors"
    >
      <img v-if="item.icon" :src="item.icon" alt="" class="w-6 h-6 mb-1" />
      {{ item.title }}
    </RouterLink>
  </nav>
</template>
