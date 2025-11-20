<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { cn } from '@/lib/utils'

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
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - markdown-it has ESM import typing issues
  const MarkdownIt = (await import('markdown-it')).default
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  md.value = new (MarkdownIt as any)({
    html: false, // Disable HTML tags for security
    linkify: true, // Auto-convert URLs to links
    typographer: true, // Enable smart quotes and other typographic replacements
    breaks: true, // Convert \n to <br>
  })
})

const renderedHtml = computed(() => {
  if (!md.value) return props.text
  return md.value.render(props.text)
})
</script>

<template>
  <div :class="cn('text-content prose prose-sm max-w-none', props.class)">
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-html="renderedHtml" />
  </div>
</template>

<style scoped>
.text-content {
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.text-content :deep(a:hover) {
  text-decoration: none;
}

.text-content :deep(ul),
.text-content :deep(ol) {
  margin: 0.5em 0;
  padding-left: 1.5em;
}

.text-content :deep(li) {
  margin: 0.25em 0;
}

.text-content :deep(blockquote) {
  border-left: 3px solid var(--accent);
  padding-left: 1em;
  margin: 0.5em 0;
  color: rgba(255, 255, 255, 0.7);
}

.text-content :deep(h1),
.text-content :deep(h2),
.text-content :deep(h3),
.text-content :deep(h4),
.text-content :deep(h5),
.text-content :deep(h6) {
  margin: 0.75em 0 0.5em 0;
  font-weight: 600;
  line-height: 1.25;
}

.text-content :deep(h1) {
  font-size: 1.5em;
}

.text-content :deep(h2) {
  font-size: 1.25em;
}

.text-content :deep(h3) {
  font-size: 1.125em;
}

.text-content :deep(hr) {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 1em 0;
}
</style>
