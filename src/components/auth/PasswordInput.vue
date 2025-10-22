<script setup lang="ts">
import { ref, computed } from 'vue'
import SimpleInput from '@/components/common/SimpleInput.vue'

const password = ref<string>('')
const valid = ref<boolean>(false)

type Rule = {
  test: (value: string) => boolean
  message: string
}

const rules: Rule[] = [
  { test: (v) => /.{8,}/.test(v), message: 'Parolei jābūt vismaz 8 rakstzīmēm garai' },
  { test: (v) => /[A-Z]/.test(v), message: 'Parolei jāietver vismaz viena lielā rakstzīme' },
  { test: (v) => /[^A-Za-z0-9]/.test(v), message: 'Parolei jāietver vismaz viens speciālais simbols' },
]

const currentError = computed<string>(() => {
  for (const rule of rules) {
    if (!rule.test(password.value)) {
      return rule.message
    }
  }
  return ''
})

function isValidPassword(value: string): boolean {
  return rules.every((rule) => rule.test(value))
}
</script>

<template>
  <SimpleInput
    v-model="password"
    id="password"
    type="password"
    label="Parole"
    required
    :validator="isValidPassword"
    :valid="valid"
    @validation="valid = $event"
    prompt="Ievadi savu paroli"
    :errorPrompt="currentError" />
</template>
