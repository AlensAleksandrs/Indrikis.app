<script setup lang="ts">
import SecondaryButton from '@/components/common/SecondaryButton.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <SecondaryButton>
    <img src="@/assets/icons/GoogleIcon.svg" class="w-[15px] aspect-square" />
    {{ t('function.google.login') }}
  </SecondaryButton>
</template>

<style scoped></style>
