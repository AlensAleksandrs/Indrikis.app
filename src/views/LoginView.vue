<script setup>
import PrimaryButton from '@/components/common/PrimaryButton.vue'
import InternalSite from '@/components/common/InternalSite.vue'
import ErrorMessage from '@/components/auth/ErrorMessage.vue'
import EmailInput from '@/components/auth/EmailInput.vue'
import PasswordInput from '@/components/auth/PasswordInput.vue'
</script>

<template>
  <section class="w-full h-full p-12 flex flex-col items-center justify-center">
    <img src="@/assets/illustrations/temp_illustration.png" class="w-48 md:w-64 aspect-square" />
    <h2 class="text-2xl md:text-3xl my-6 font-semibold text-t-l-default dark:text-t-d-l14">Pieslēgties portālam</h2>
    <ErrorMessage/>
    <div class="flex flex-col md:flex-row gap-4 md:gap-8">
      <EmailInput/>
      <PasswordInput/>
    </div>
    <PrimaryButton>Pieslēgties</PrimaryButton>
    <InternalSite class="mt-8 underline" href="/forgot-password">Izmantot citu pieslēgšanās metodi?</InternalSite>
  </section>
</template>

<style scoped></style>
