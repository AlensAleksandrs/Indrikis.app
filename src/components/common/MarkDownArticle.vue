<script setup lang="ts">
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { marked } from 'marked'

interface Props {
  file: string
}

const props = defineProps<Props>()

const files: Record<string, string> = import.meta.glob('@/locales/*/*.md', {
  eager: true,
  import: 'default',
  query: '?raw',
})

const { locale } = useI18n()
const content = ref<string>('')

function loadMarkdown() {
  const path = `/src/locales/${locale.value}/${props.file}.md`
  const raw = files[path]
  content.value = marked.parse(raw ?? '# Not found') as string
}

loadMarkdown()

watch(locale, loadMarkdown)
</script>

<template>
  <article class="prose prose-slate dark:prose-invert px-12 pt-24 pb-6 max-w-none">
    <div v-html="content"></div>
  </article>
</template>

<style>
@reference "tailwindcss";

.prose:has(p[style*='italic']) p:not([style*='italic']),
.prose:has(p[style*='italic']) h2,
.prose:has(p[style*='italic']) h3,
.prose:has(p[style*='italic']) ul,
.prose:has(p[style*='italic']) ol {
  @apply text-justify;
}
</style>
