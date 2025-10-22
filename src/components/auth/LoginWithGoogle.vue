<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import SecondaryButton from '@/components/common/SecondaryButton.vue'

const { t } = useI18n()
</script>

<template>
  <SecondaryButton>
    <img src="@/assets/icons/GoogleIcon.svg" alt="Google" class="w-[15px] h-[15px]" />
    {{ t('system.google.login') }}
  </SecondaryButton>
</template>
