<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { t, locale } = useI18n()
</script>

<template>
  <div class="text-t-l-default dark:text-t-d-default">
    <h2>{{ t('home.title') }}</h2>
    <button @click="toggleDark()">{{ t('home.switch') }}</button>
    <p>{{ t('home.status', { status: isDark }) }}</p>
    <select v-model="locale">
      <option value="EN">English</option>
      <option value="LV">Latviešu</option>
      <option value="DE">Deutsch</option>
    </select>
  </div>
</template>
