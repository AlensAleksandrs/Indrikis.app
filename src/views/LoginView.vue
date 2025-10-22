<script setup>
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import InfoMessage from '@/components/auth/InfoMessage.vue'
import EmailInput from '@/components/auth/EmailInput.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const messages = {
  default: computed(() => ({
    message: t('view.login.info.default'),
    type: "default",
    color: "text-t-l-default dark:text-t-d-default"
  })),
  action: computed(() => ({
    message: t('view.login.info.action'),
    type: "action",
    color: "text-a-l-default dark:text-a-d-d10"
  })),
  error: computed(() => ({
    message: "",
    type: "error",
    color: "text-t-error dark:text-t-error"
  })),
  success: computed(() => ({
    message: t('view.login.info.success'),
    type: "success",
    color: "text-a-l-default dark:text-a-d-d10"
  })),
}

const currentMessage = ref(messages.default)

function onSubmit() {
  currentMessage.value = messages.action
  setTimeout(() => {
    currentMessage.value = messages.success
  }, 100)
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <section class="w-full h-full p-6 flex flex-col items-center justify-center">
      <img src="@/assets/illustrations/temp_illustration.png"
           class="select-none w-32 md:w-48 aspect-square" />
      <h2
        class="select-none text-2xl md:text-3xl mb-4 font-semibold text-t-l-default dark:text-t-d-l14">
        {{ t('view.login.title') }} </h2>

      <InfoMessage
        :text="currentMessage.message"
        :type="currentMessage.type"
        :color="currentMessage.color"
      />

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
