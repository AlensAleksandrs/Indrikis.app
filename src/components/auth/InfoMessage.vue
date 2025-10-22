<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from 'vue'

const props = defineProps<{
  text: string
  type?: 'default' | 'action' | 'error' | 'success'
  color?: string
}>()

const dots = ref('')
let interval: ReturnType<typeof setInterval> | null = null

watch(
  () => props.type,
  (newType) => {
    if (newType === 'action') {
      startDots()
    } else {
      stopDots()
      dots.value = ''
    }
  },
  { immediate: true }
)

function startDots(): void {
  stopDots()
  const states = ['.', '..', '...']
  let i = 0
  interval = setInterval(() => {
    dots.value = states[i]
    i = (i + 1) % states.length
  }, 400)
}

function stopDots(): void {
  if (interval !== null) {
    clearInterval(interval)
    interval = null
  }
}

onBeforeUnmount(stopDots)
</script>

<template>
  <h1
    class="select-none text-xs md:text-sm font-light transition-colors duration-300"
    :class="color">
    {{ text }}<span v-if="type === 'action'">{{ dots }}</span>
  </h1>
</template>
