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
  <nav class="flex flex-col space-y-2">
    <RouterLink
      v-for="item in map"
      :key="item.link"
      :to="'/' + item.link"
      class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-b-l-d8 dark:hover:bg-b-d-l8 transition-colors"
    >
      <img v-if="item.icon" :src="item.icon" alt="" class="w-5 h-5" />
      <span class="text-sm font-medium text-t-l-default dark:text-t-d-default">
        {{ item.title }}
      </span>
    </RouterLink>
  </nav>
</template>
