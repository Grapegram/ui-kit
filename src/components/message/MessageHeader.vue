<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

export type Props = {
  username: string
  color?: string
  class?: string
}

defineOptions({
  name: 'MessageHeader',
})

const props = defineProps<Props>()

const usernameColor = computed(() => props.color ?? 'var(--accent)')
</script>

<template>
  <header :class="cn('message-header px-3 py-2', props.class)">
    <span class="font-bold" :style="`color: ${usernameColor}`">
      {{ props.username }}
    </span>
  </header>
</template>

<style scoped>
.message-header {
  display: block;
}
</style>
