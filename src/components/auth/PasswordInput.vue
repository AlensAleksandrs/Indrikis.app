<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SimpleInput from '@/components/common/SimpleInput.vue'

const props = defineProps<{
  modelValue: string
  valid: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'validation', value: boolean): void
}>()

const { t } = useI18n()

type Rule = {
  test: (value: string) => boolean
  message: string
}

const rules = computed<Rule[]>(() => [
  { test: (v) => /.{8,}/.test(v), message: t('system.form.password.rules.min-length') },
  { test: (v) => /[A-Z]/.test(v), message: t('system.form.password.rules.capital-letter') },
  { test: (v) => /[^A-Za-z0-9]/.test(v), message: t('system.form.password.rules.special-symbol') },
])

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

const currentError = computed<string>(() => {
  for (const rule of rules.value) {
    if (!rule.test(model.value)) {
      return rule.message
    }
  }
  return ''
})

function isValidPassword(value: string): boolean {
  return rules.value.every((rule) => rule.test(value))
}
</script>

<template>
  <SimpleInput
    v-model="model"
    id="password"
    type="password"
    :label="t('system.form.password.label')"
    required
    :validator="isValidPassword"
    :valid="props.valid"
    @validation="(v) => emit('validation', v)"
    :prompt="t('system.form.password.prompt')"
    :errorPrompt="currentError"
  />
</template>
