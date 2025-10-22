<script setup>
import IndrikisAppLogo from '@/components/common/IndrikisAppLogo.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import LanguageSelect from '@/components/interface/LanguageSelect.vue'
import ThemeSelect from '@/components/interface/ThemeSelect.vue'
import { useDark } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const router = useRouter()

useDark()
const { t } = useI18n()
</script>

<template>
  <div
    class="max-w-[1250px] w-screen h-screen overflow-scroll flex flex-col bg-b-l-default dark:bg-b-d-l8 shadow-md">
    <header class="cursor-pointer w-full pt-10 p-4 md:p-12 md:pb-4 flex flex-row justify-between items-end">
      <IndrikisAppLogo @click="router.push('/')" class="cursor-pointer" />
      <div class="flex flex-row gap-8">
        <ThemeSelect />
        <LanguageSelect />
      </div>
    </header>
    <main class="grow">
      <RouterView />
    </main>
    <footer class="w-full flex flex-row justify-between items-start pb-6 p-4 md:px-12 md:pt-4">
      <div class="flex flex-row gap-4 md:gap-8">
        <InternalSite href="/privacy-policy">{{ t('layout.public.privacy-policy') }}</InternalSite>
        <InternalSite href="/terms-of-service">{{
          t('layout.public.terms-of-service')
        }}</InternalSite>
      </div>
      <InternalSite href="/help">{{ t('layout.public.help') }}</InternalSite>
    </footer>
  </div>
</template>

<style scoped></style>
