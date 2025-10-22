<script setup lang="ts">
import EmailInput from '@/components/auth/EmailInput.vue'
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'
import ErrorMessage from '@/components/auth/InfoMessage.vue'
import InternalSite from '@/components/common/InternalSite.vue'
</script>

<template>
  <section class="w-full h-full p-6 flex flex-col items-center justify-center">
    <img src="@/assets/illustrations/temp_illustration.png" class="w-32 md:w-48 aspect-square" />
    <h2 class="text-2xl md:text-3xl mb-4 font-semibold text-t-l-default dark:text-t-d-l14">Neatceries paroli?</h2>
    <ErrorMessage/>
    <EmailInput class="my-8"/>
    <PrimaryButton>Atiestatīt</PrimaryButton>
    <InternalSite class="mt-8 underline" href="/login">Atcerējies paroli?</InternalSite>
  </section>
</template>

<style scoped></style>
