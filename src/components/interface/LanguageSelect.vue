<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import DropdownSelect from '@/components/common/DropdownSelect.vue'

const { availableLocales, locale } = useI18n()
</script>

<template>
  <DropdownSelect v-model:selection="locale" :options="availableLocales" />
</template>
