<script setup lang="ts">
import { computed } from 'vue'
import { Check, CheckCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read'

export type Props = {
  timestamp: string | Date
  status?: MessageStatus
  side: 'left' | 'right'
  overlayMode?: boolean
  class?: string
}

defineOptions({
  name: 'MessageFooter',
})

const props = withDefaults(defineProps<Props>(), {
  status: 'sent',
  overlayMode: false,
})

const formattedTime = computed(() => {
  if (typeof props.timestamp === 'string') {
    return props.timestamp
  }

  const date = props.timestamp
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
})

const showReadIcon = computed(() => props.side === 'right')

const footerClasses = computed(() => ({
  'message-footer-overlay': props.overlayMode,
  'message-footer-inline': !props.overlayMode,
  'justify-end': props.side === 'right',
  'justify-start': props.side === 'left',
}))
</script>

<template>
  <div :class="cn('message-footer', footerClasses, props.class)">
    <span class="message-footer-time">{{ formattedTime }}</span>

    <!-- Read status icon (only for sent messages - right side) -->
    <span v-if="showReadIcon" class="message-footer-status">
      <CheckCheck
        v-if="props.status === 'read'"
        :size="14"
        :stroke-width="2.5"
        class="status-read"
      />
      <CheckCheck v-else-if="props.status === 'delivered'" :size="14" :stroke-width="2.5" />
      <Check v-else-if="props.status === 'sent'" :size="14" :stroke-width="2.5" />
    </span>
  </div>
</template>

<style scoped>
.message-footer {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.6875rem;
  line-height: 1.2;
  color: rgba(255, 255, 255, 0.65);
  user-select: none;
  white-space: nowrap;
}

.message-footer-overlay {
  position: absolute;
  bottom: 0.25rem;
  right: 0.5rem;
  padding: 0.25rem 0.5rem;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  border-radius: var(--radius-sm);
  color: rgba(255, 255, 255, 0.95);
}

.message-footer-time {
  font-weight: 500;
  white-space: nowrap;
}

.message-footer-status {
  display: inline-flex;
  align-items: center;
  opacity: 0.85;
}

.status-read {
  color: var(--accent, #4fc3f7);
  opacity: 1;
}
</style>
