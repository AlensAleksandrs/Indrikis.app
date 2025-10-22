<script setup lang="ts">
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import InfoMessage from '@/components/auth/InfoMessage.vue'
import EmailInput from '@/components/auth/EmailInput.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Status = 'idle' | 'working' | 'error' | 'success'
const status = ref < Status > ('idle')
const errorText = ref < string > ('')

function onSubmit() {
  status.value = 'working'
  setTimeout(() => {
    status.value = 'success'
  }, 100)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <section class="w-full h-full p-6 flex flex-col items-center justify-center">
      <img
        src="../../assets/illustrations/temp_illustration.png"
        class="select-none w-32 md:w-48 aspect-square" />
      <h2
        class="select-none text-2xl md:text-3xl mb-4 font-semibold text-t-l-default dark:text-t-d-l14">
        {{ t('view.login.title') }}
      </h2>

      <InfoMessage
        base-key="view.login.info"
        :status="status"
        :error-text="errorText"
        :color-map="{
          idle: 'text-t-l-default dark:text-t-d-default',
          working: 'text-a-l-default dark:text-a-d-d10',
          success: 'text-a-l-default dark:text-a-d-d10',
          error: 'text-t-error dark:text-t-error'
        }" />

      <div class="flex flex-col gap-6 py-8">
        <EmailInput />
        <PasswordInput />
      </div>

      <PrimaryButton type="submit">{{ t('view.login.form-submit') }}</PrimaryButton>

      <InternalSite class="mt-8 underline text-center" href="/forgot-password">
        {{ t('view.login.forgot-password') }}
      </InternalSite>
    </section>
  </form>
</template>
