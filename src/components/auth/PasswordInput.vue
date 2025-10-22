<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

import SimpleInput from '@/components/common/SimpleInput.vue'

const password = ref<string>('')
const valid = ref<boolean>(false)
const { t } = useI18n()

type Rule = {
  test: (value: string) => boolean
  message: string
}

const rules: Rule[] = [
  { test: (v) => /.{8,}/.test(v), message: t( 'function.form.password.rules.min-length' ) },
  { test: (v) => /[A-Z]/.test(v), message: t( 'function.form.password.rules.capital-letter' ) },
  { test: (v) => /[^A-Za-z0-9]/.test(v), message: t( 'function.form.password.rules.special-symbol' ) },
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
    :label=" t( 'function.form.password.label' ) "
    required
    :validator="isValidPassword"
    :valid="valid"
    @validation="valid = $event"
    :prompt=" t( 'function.form.password.prompt' ) "
    :errorPrompt="currentError" />
</template>
