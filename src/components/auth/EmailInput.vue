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

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value),
})

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
</script>

<template>
  <SimpleInput
    v-model="model"
    id="email"
    type="email"
    :label="t('system.form.email.label')"
    required
    :validator="isValidEmail"
    :valid="props.valid"
    @validation="(v) => emit('validation', v)"
    :prompt="t('system.form.email.prompt')"
    :errorPrompt="t('system.form.email.error-prompt')"
  />
</template>
