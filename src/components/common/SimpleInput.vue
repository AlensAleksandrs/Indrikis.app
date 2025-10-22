<script setup lang="ts">
import { ref, computed } from 'vue'
import StateIcon from '@/components/auth/StateIcon.vue'
import EyeSwitch from '@/components/icons/EyeSwitch.vue'

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

function onInput(event: Event): void {
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
  return props.type ?? 'text'
})

const inputPadding = computed(() => (props.type === 'password' ? 'pr-16' : 'pr-10'))
</script>

<template>
  <div class="relative flex flex-col">
    <label
      :for="id"
      class="mb-2 select-none text-xs font-light text-t-l-default dark:text-t-d-default md:text-sm"
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
        'h-12 w-56 select-none rounded-xl border px-4 text-xs md:w-64',
        'bg-b-l-d8 text-t-l-d10 border-b-l-d8',
        'dark:bg-b-d-l10 dark:text-t-d-default dark:border-b-d-l10',
        'outline-none focus:shadow-none focus:ring-0',
        'focus:outline-p-l-default focus:dark:outline-p-d-d10',
        inputPadding,
        !props.valid && !!modelValue && '!border-t-error dark:!border-b-error',
      ]"
    />

    <EyeSwitch
      v-if="type === 'password'"
      v-model="eyeState"
      class="absolute bottom-4 right-10 select-none"
    />

    <StateIcon
      :state="valid"
      :defined="!!modelValue"
      :errorPrompt="errorPrompt"
      class="absolute bottom-4 right-4 select-none"
    />
  </div>
</template>
