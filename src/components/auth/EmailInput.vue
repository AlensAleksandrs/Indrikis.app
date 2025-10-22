<script setup lang="ts">
import SimpleInput from '@/components/common/SimpleInput.vue'
import { ref } from 'vue'

const email = ref('')
const valid = ref(false)

const isValidEmail = (val: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)
</script>

<template>
  <SimpleInput
    v-model="email"
    id="email"
    type="email"
    label="E-pasta adrese"
    :required="true"
    :validator="isValidEmail"
    :valid="valid"
    @validation="valid = $event"
    prompt="Ievadi savu e-pasta adresi"
    errorPrompt="Ievadītā e-pasta adrese nav pareiza!"
  />
</template>
