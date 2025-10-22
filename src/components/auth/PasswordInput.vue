<script setup lang="ts">
import SimpleInput from '@/components/common/SimpleInput.vue'
import { ref, computed } from 'vue'

const password = ref('')
const valid = ref(false)

type Rule = {
  test: (val: string) => boolean
  message: string
}

const rules: Rule[] = [
  { test: (v) => /.{8,}/.test(v), message: 'Parolei jābūt vismaz 8 rakstzīmēm garai' },
  { test: (v) => /[A-Z]/.test(v), message: 'Parolei jāietver vismaz viena lielā rakstzīme' },
  { test: (v) => /[^A-Za-z0-9]/.test(v), message: 'Parolei jāietver vismaz viens speciālais simbols' },
]

const currentError = computed(() => {
  for (const rule of rules) {
    if (!rule.test(password.value)) {
      return rule.message
    }
  }
  return ''
})

const isValidPassword = (val: string): boolean => {
  return rules.every((rule) => rule.test(val))
}
</script>

<template>
  <SimpleInput
    v-model="password"
    id="password"
    type="password"
    label="Parole"
    :required="true"
    :validator="isValidPassword"
    :valid="valid"
    @validation="valid = $event"
    prompt="Ievadi savu paroli"
    :errorPrompt="currentError"
  />
</template>
