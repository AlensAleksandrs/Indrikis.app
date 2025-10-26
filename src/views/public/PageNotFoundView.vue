<script setup lang="ts">
import { useRouter } from 'vue-router'
import PrimaryButton from '@/components/common/PrimaryButton.vue'

const router = useRouter()

function goBack() {
  if (document.referrer && new URL(document.referrer).origin === window.location.origin) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <section class="w-full h-full flex flex-col items-center justify-center">
    <h3 class="text-md md:text-lg font-light text-t-l-default dark:text-t-d-l14">404 ERROR</h3>
    <h2 class="text-2xl md:text-3xl mb-12 font-normal text-t-l-default dark:text-t-d-l14">
      Page not found
    </h2>

    <PrimaryButton :action="goBack"> Go back </PrimaryButton>
  </section>
</template>
