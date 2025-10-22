<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

import SimpleInput from '@/components/common/SimpleInput.vue'

const email = ref<string>('')
const valid = ref<boolean>(false)
const { t } = useI18n()

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}
</script>

<template>
  <SimpleInput
    v-model="email"
    id="email"
    type="email"
    :label=" t( 'function.form.email.label' ) "
    required
    :validator="isValidEmail"
    :valid="valid"
    @validation="valid = $event"
    :prompt=" t( 'function.form.email.prompt' ) "
    LerrorPrompt=" t( 'function.form.email.error-prompt' ) " />
</template>
