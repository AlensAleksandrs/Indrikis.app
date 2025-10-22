<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  options: string[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const index = ref(0)

function next(): void {
  if (props.options.length === 0) return
  index.value = (index.value + 1) % props.options.length
  emit('update:modelValue', props.options[index.value])
}
</script>

<template>
  <span
    class="cursor-pointer text-xs font-light text-t-l-default hover:text-a-l-default hover:underline dark:text-t-d-default hover:dark:text-a-d-default md:text-sm"
    @click="next">
    {{ props.options[index] }}
  </span>
</template>
