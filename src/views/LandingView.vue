<script setup>
import { useRouter } from 'vue-router'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import LoginWithGoogle from '@/components/auth/LoginWithGoogle.vue'
import { useI18n } from 'vue-i18n'
import InternalSite from '@/components/common/InternalSite.vue'

const router = useRouter()
const { t, tm } = useI18n()
const quotes = tm('view.landing.quotes')
const available = Object.keys(quotes).filter((key) => quotes[key] !== '')
const randomKey = available[Math.floor(Math.random() * available.length)]
</script>

<template>
  <section class="w-full h-full p-6 flex flex-col items-center justify-center">
    <img src="@/assets/illustrations/temp_illustration.png" class="w-32 md:w-48 aspect-square" />
    <h2 class="text-2xl md:text-3xl mb-4 font-semibold text-t-l-default dark:text-t-d-l14">
      {{ t('view.landing.title') }}
    </h2>
    <p
      class="text-xs md:text-sm max-w-[280px] text-center font-light text-t-l-default dark:text-t-d-default"
    >
      {{ t(`view.landing.quotes.${randomKey}`) }}
    </p>
    <p
      class="text-xs md:text-xs text-center mt-4 mb-4 md:mb-8 font-light text-t-l-default dark:text-t-d-default"
    >
      - {{ t(`view.landing.authors.${randomKey}`) }} -
    </p>
    <div class="flex flex-col gap-4 md:gap-8">
      <PrimaryButton :action="() => router.push('/login')">{{
        t('view.landing.login')
      }}</PrimaryButton>
      <LoginWithGoogle />
    </div>
    <InternalSite class="mt-8 underline" href="/forgot-password">{{
      t('view.landing.forgot-password')
    }}</InternalSite>
  </section>
</template>
