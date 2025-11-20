<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { cn } from '@/lib/utils'
import hljs from 'highlight.js'
import MarkdownIt from 'markdown-it'
// @ts-expect-error this module has no types
import mdStrikethrough from 'markdown-it-strikethrough-alt'

export type Props = {
  text: string
  class?: string
}

defineOptions({
  name: 'TextContent',
})

const props = defineProps<Props>()

interface MarkdownInstance {
  render: (text: string) => string
}

const md = ref<MarkdownInstance | null>(null)

onMounted(async () => {
  const markdownInstance = new MarkdownIt({
    html: false,
    linkify: true,
    typographer: false,
    breaks: true,
    highlight: function (str: string, lang: string) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(str, { language: lang }).value
        } catch {
          // ignore
        }
      }
      return '' // use external default escaping
    },
  })

  markdownInstance.use(mdStrikethrough)
  markdownInstance.disable([
    'heading', // Disable h1-h6
    'lheading', // Disable underline-style headings
    'hr', // Disable horizontal rules
    'list', // Disable lists (ul, ol)
    'table', // Disable tables
    'html_block', // Disable HTML blocks
    'reference', // Disable reference-style links
  ])

  md.value = markdownInstance
})

const renderedHtml = computed(() => {
  if (!md.value) return props.text
  return md.value.render(props.text)
})
</script>

<template>
  <div :class="cn('text-content prose prose-sm max-w-none', props.class)">
    <div v-html="renderedHtml" class="text-content-body" />
  </div>
</template>

<style>
@import 'highlight.js/styles/github-dark.css';
</style>

<style scoped>
@reference "#main.css";

.text-content {
  word-wrap: break-word;
  overflow-wrap: break-word;
  display: inline;
}

.text-content-body {
  display: inline;
}

/* Markdown prose styles */
.text-content :deep(p) {
  margin: 0;
  line-height: 1.5;
}

.text-content :deep(p + p) {
  margin-top: 0.5em;
}

.text-content :deep(strong) {
  font-weight: 600;
}

.text-content :deep(em) {
  font-style: italic;
}

.text-content :deep(s) {
  text-decoration: line-through;
}

.text-content :deep(code) {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.125rem 0.25rem;
  border-radius: var(--radius-sm);
  font-size: 0.875em;
  font-family: 'Courier New', Courier, monospace;
}

.text-content :deep(pre) {
  background-color: rgba(0, 0, 0, 0.1);
  padding: 0.75rem;
  border-radius: var(--radius-md);
  overflow-x: auto;
  margin: 0.5em 0;
}

.text-content :deep(pre code) {
  background-color: transparent;
  padding: 0;
}

.text-content :deep(a) {
  color: var(--link);
  text-decoration: none;
}

.text-content :deep(a:hover) {
  text-decoration: underline;
  text-underline-offset: 2px;
}

.text-content :deep(blockquote) {
  @apply bg-accent/10 border-accent my-2 rounded-md border-l-4 p-1 pl-2;
}
</style>
