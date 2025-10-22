<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const index = ref(0)

function next() {
  if (!props.options?.length) return
  index.value = (index.value + 1) % props.options.length
  emit('update:modelValue', props.options[index.value])
}
</script>

<template>
  <span
    class="text-xs md:text-sm font-light text-t-l-default dark:text-t-d-default
           cursor-pointer hover:text-a-l-default hover:dark:text-a-d-default hover:underline"
    @click="next"
  >
    {{ props.options[index] }}
  </span>
</template>
