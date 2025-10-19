<script setup>
import DropdownSelect from '@/components/common/DropdownSelect.vue'
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()
</script>

<template>
  <DropdownSelect v-model:selection="locale" :options="availableLocales"/>
</template>

<style scoped>

</style>
