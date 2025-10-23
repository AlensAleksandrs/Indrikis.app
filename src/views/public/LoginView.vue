<script setup lang="ts">
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import InfoMessage from '@/components/auth/InfoMessage.vue'
import EmailInput from '@/components/auth/EmailInput.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'
import SmallServerImage from '@/assets/illustrations/small-server.svg'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

type Status = 'idle' | 'working' | 'error' | 'success' | 'mandatory'
const status = ref<Status>('idle')
const errorText = ref<string>('')

const email = ref<string>('')
const password = ref<string>('')

const emailValid = ref<boolean>(false)
const passwordValid = ref<boolean>(false)

async function fakeLogin(email: string, password: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@example.com' && password === 'Password123#') {
        resolve(true)
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 1000)
  })
}

async function onSubmit() {
  status.value = 'working'
  errorText.value = ''

  if (!emailValid.value || !passwordValid.value) {
    status.value = 'mandatory'
    errorText.value = ''
    return
  }

  try {
    const success = await fakeLogin(email.value, password.value)
    if (success) {
      status.value = 'success'
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      status.value = 'error'
      errorText.value = err.message
    } else {
      status.value = 'error'
      errorText.value = 'Unknown error'
    }
  }
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <section class="w-full h-full p-6 flex flex-col items-center justify-center">
      <SmallServerImage
        id="illustration"
        class="select-none text-p-l-l10 w-32 md:w-48 aspect-square"
      />
      <h2
        class="select-none text-2xl md:text-3xl mt-6 mb-2 font-semibold text-t-l-default dark:text-t-d-l14"
      >
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
          error: 'text-t-error dark:text-t-error',
          mandatory: 'text-a-l-d10 dark:text-a-d-default',
        }"
      />

      <div class="flex flex-col gap-2 lg:gap-6 py-4 lg:py-8">
        <EmailInput v-model="email" :valid="emailValid" @validation="emailValid = $event" />
        <PasswordInput
          v-model="password"
          :valid="passwordValid"
          @validation="passwordValid = $event"
        />
      </div>

      <PrimaryButton type="submit">{{ t('view.login.form-submit') }}</PrimaryButton>

      <InternalSite class="mt-8 underline text-center" href="/forgot-password">
        {{ t('view.login.forgot-password') }}
      </InternalSite>
    </section>
  </form>
</template>
