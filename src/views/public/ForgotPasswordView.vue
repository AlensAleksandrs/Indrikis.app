<script setup lang="ts">
import EmailInput from '@/components/auth/EmailInput.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import InfoMessage from '@/components/auth/InfoMessage.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="w-full h-full p-6 flex flex-col items-center justify-center">
    <img src="../../assets/illustrations/temp_illustration.png" class="w-32 md:w-48 aspect-square" />
    <h2 class="text-2xl md:text-3xl mb-4 font-semibold text-t-l-default dark:text-t-d-l14">
      {{ t('view.forgot-password.title') }}
    </h2>
    <InfoMessage
      base-key="view.login.info"
      status="idle"
      :color-map="{
          idle: 'text-t-l-default dark:text-t-d-default',
          working: 'text-a-l-default dark:text-a-d-d10',
          success: 'text-a-l-default dark:text-a-d-d10',
          error: 'text-t-error dark:text-t-error'
        }" />
    <EmailInput class="my-8" />
    <PrimaryButton>{{ t('view.forgot-password.form-submit') }}</PrimaryButton>
    <InternalSite class="mt-8 underline" href="/login">{{
      t('view.forgot-password.remember-password')
    }}</InternalSite>
  </section>
</template>

<style scoped></style>
