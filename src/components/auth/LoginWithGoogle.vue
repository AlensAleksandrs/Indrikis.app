<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import GoogleIcon from '@/assets/icons/GoogleIcon.svg'
import SecondaryButton from '@/components/common/SecondaryButton.vue'

const { t } = useI18n()
</script>

<template>
  <SecondaryButton>
    <GoogleIcon class="w-[15px] h-[15px]" />
    {{ t('system.google.login') }}
  </SecondaryButton>
</template>
