<script setup>
import IndrikisAppLogo from '@/components/common/IndrikisAppLogo.vue'
import LanguageSelect from '@/components/interface/LanguageSelect.vue'
import ThemeSelect from '@/components/interface/ThemeSelect.vue'
import SearchBar from '@/components/common/SearchBar.vue'
</script>

<template>
  <div class="w-screen h-screen flex flex-row">
    <div class="w-screen sm:w-64 h-screen flex flex-col shadow-md">
      <header
        class="flex flex-col bg-b-l-default dark:bg-b-d-l8 gap-6 w-full items-center justify-center py-6 px-4"
      >
        <IndrikisAppLogo @click="router.push('/dashboard')" class="cursor-pointer" />
        <SearchBar class="hidden sm:flex" />
      </header>
      <section
        class="flex grow sm:bg-b-l-default overflow-auto sm:dark:bg-b-d-l8 sm:justify-center"
      >
        <RouterView class="sm:hidden" />
      </section>
      <footer
        class="flex flex-row bg-b-l-default dark:bg-b-d-l8 w-full items-center justify-center gap-4 p-6"
      >
        <ThemeSelect />
        <LanguageSelect />
      </footer>
    </div>
    <div>
      <RouterView class="hidden sm:flex flex-col" />
    </div>
  </div>
</template>

<style scoped></style>
