<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps<{
  selection?: string
  options?: string[]
}>()

const emit = defineEmits<{
  (e: 'update:selection', value: string): void
}>()

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

function toggle(): void {
  open.value = !open.value
}

function selectOption(option: string): void {
  emit('update:selection', option)
  open.value = false
}

function handleClickOutside(event: MouseEvent): void {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target as Node)) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      type="button"
      class="flex cursor-pointer items-center text-sm font-light text-t-l-default hover:text-a-l-default hover:underline dark:text-t-d-default hover:dark:text-a-d-d6"
      @click="toggle"
      aria-haspopup="listbox"
      :aria-expanded="open">
      {{ props.selection ?? 'ABC' }}
      <span class="ml-1">⏷</span>
    </button>

    <ul
      v-if="open"
      class="absolute z-10 mt-2 w-16 rounded-md bg-b-l-l2 shadow-lg ring-1 ring-black/10 focus:outline-none dark:bg-b-d-l10"
      role="listbox">
      <li
        v-for="option in props.options ?? ['ABC', 'DEF', 'GHI']"
        :key="option"
        role="option"
        :aria-selected="option === props.selection"
        class="cursor-pointer rounded-md px-3 py-2 text-sm text-t-l-default hover:bg-b-l-default hover:text-t-l-d8 dark:text-t-d-default dark:hover:bg-b-d-l12 dark:hover:text-t-d-l12"
        @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>
