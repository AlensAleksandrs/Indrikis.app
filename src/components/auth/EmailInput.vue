<script setup lang="ts">
import { ref } from 'vue'
import SimpleInput from '@/components/common/SimpleInput.vue'

const email = ref<string>('')
const valid = ref<boolean>(false)

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
</script>

<template>
  <SimpleInput
    v-model="email"
    id="email"
    type="email"
    label="E-pasta adrese"
    required
    :validator="isValidEmail"
    :valid="valid"
    @validation="valid = $event"
    prompt="Ievadi savu e-pasta adresi"
    errorPrompt="Ievadītā e-pasta adrese nav pareiza!" />
</template>
