<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

defineProps({
  selection: { type: String, default: "ABC" },
  options: { type: Array, default: () => ["ABC", "DEF", "GHI"] },
});

const emit = defineEmits(["update:selection"]);
const open = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

function toggle() {
  open.value = !open.value;
}

function selectOption(option) {
  emit("update:selection", option);
  open.value = false;
}
function handleClickOutside(e: MouseEvent) {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target as Node)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

</script>

<template>
  <div ref="dropdownRef" class="relative inline-block text-left">
    <button
      type="button"
      class="flex items-center text-sm
      font-light text-t-l-default dark:text-t-d-default
      cursor-pointer hover:text-t-l-l4 hover:dark:text-t-d-l4 hover:underline"
      @click="toggle"
      aria-haspopup="listbox"
      :aria-expanded="open">
      {{ selection }}
      <span class="ml-1">⏷</span>
    </button>

    <ul
      v-if="open"
      class="absolute mt-2 w-16 bg-b-l-l2 dark:bg-b-d-l10
      shadow-lg rounded-md ring-1 ring-black/10 focus:outline-none z-10"
      role="listbox">
      <li
        v-for="option in options"
        :key="option"
        role="option"
        :aria-selected="option === selection"
        class="cursor-pointer px-3 py-2 text-sm rounded-md hover:bg-b-l-default dark:hover:bg-b-d-l12
        text-t-l-default hover:text-t-l-d8 dark:text-t-d-default dark:hover:text-t-d-l12"
        @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
