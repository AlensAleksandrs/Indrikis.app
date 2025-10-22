<script setup lang="ts">
import StateIcon from '@/components/auth/StateIcon.vue'
import EyeSwitch from '@/components/icons/EyeSwitch.vue'
import { ref, computed } from 'vue'

const props = defineProps<{
  modelValue: string
  id: string
  type?: string
  label?: string
  errorPrompt?: string
  prompt: string
  required?: boolean
  error?: string
  validator?: (val: string) => boolean
  valid?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'validation', value: boolean): void
}>()

const eyeState = ref(false)

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value
  emit('update:modelValue', value)
  if (props.validator) {
    const isValid = props.validator(value)
    emit('validation', isValid)
  }
}

const inputType = computed(() => {
  if (props.type === 'password') {
    return eyeState.value ? 'text' : 'password'
  }
  return props.type || 'text'
})

const inputPadding = computed(() => {
  return props.type === 'password' ? 'pr-16' : 'pr-10'
})
</script>

<template>
  <div class="relative flex flex-col">
    <label
      :for="id"
      class="select-none mb-2 text-xs md:text-sm font-light text-t-l-default dark:text-t-d-default"
    >
      {{ label }}
      <span v-if="required" class="text-a-l-d10 dark:text-a-d-d10">*</span>
    </label>

    <input
      :id="id"
      :value="modelValue"
      :type="inputType"
      :placeholder="prompt"
      @input="onInput"
      :class="[
        'select-none w-56 md:w-64 h-12 rounded-xl px-4 text-sm',
        'bg-b-l-d8 dark:bg-b-d-l10 text-t-l-d10 dark:text-t-d-default',
        'border border-b-l-d8 dark:border-b-d-l10',
        'outline-none focus:ring-0 focus:shadow-none',
        'focus:outline-p-l-default focus:dark:outline-p-d-d10',
        inputPadding,
        (!props.valid && !!modelValue) && '!border-t-error dark:!border-b-error'
      ]"
    />

    <EyeSwitch
      v-if="type === 'password'"
      v-model="eyeState"
      class="select-none absolute right-10 bottom-4"
    />

    <StateIcon
      :state="valid"
      :defined="!!modelValue"
      :errorPrompt="errorPrompt"
      class="select-none absolute right-4 bottom-4"
    />
  </div>
</template>
