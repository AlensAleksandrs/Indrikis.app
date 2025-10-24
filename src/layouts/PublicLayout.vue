<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useDark } from '@vueuse/core'
import IndrikisAppLogo from '@/components/common/IndrikisAppLogo.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import LanguageSelect from '@/components/interface/LanguageSelect.vue'
import ThemeSelect from '@/components/interface/ThemeSelect.vue'

const router = useRouter()
useDark()
const { t } = useI18n()
</script>

<template>
  <div
    class="flex min-h-screen w-screen max-w-[1250px] flex-col overflow-y-auto bg-b-l-default shadow-md dark:bg-b-d-l8"
  >
    <header class="flex w-full flex-row items-end justify-between p-4 pt-10 md:p-12 md:pb-4">
      <IndrikisAppLogo @click="router.push('/')" class="cursor-pointer" />
      <div class="flex flex-row gap-8">
        <ThemeSelect />
        <LanguageSelect />
      </div>
    </header>

    <main class="grow flex items-center justify-center">
      <RouterView />
    </main>

    <footer class="flex w-full flex-row items-start justify-between p-4 pb-6 md:px-12 md:pt-4">
      <div class="flex flex-row gap-4 md:gap-8">
        <InternalSite href="/privacy-policy">
          {{ t('layout.public.privacy-policy') }}
        </InternalSite>
        <InternalSite href="/terms-of-service">
          {{ t('layout.public.terms-of-service') }}
        </InternalSite>
      </div>
      <InternalSite href="/help">
        {{ t('layout.public.help') }}
      </InternalSite>
    </footer>
  </div>
</template>
