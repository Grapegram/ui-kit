<script setup lang="ts">
import { computed } from 'vue'
import { Check, CheckCheck } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

export type MessageStatus = 'sending' | 'sent' | 'delivered' | 'read'

export type Props = {
  timestamp: string | Date
  status?: MessageStatus
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

const showReadIcon = computed(() => false)

const footerClasses = computed(() => ({
  'rounded-md py-1 px-2 bg-gray-900/50 backdrop-blur-xs text-primary-foreground': props.overlayMode,
  'inline-flex text-muted-foreground': !props.overlayMode,
}))
</script>

<template>
  <div
    :class="
      cn(
        'inline-flex items-center gap-3 text-sm font-light whitespace-nowrap select-none',
        footerClasses,
        props.class,
      )
    "
  >
    <span>{{ formattedTime }}</span>

    <!-- Read status icon (only for sent messages - right side) -->
    <span v-if="showReadIcon" class="inline-fex items-center opacity-90">
      <CheckCheck
        v-if="props.status === 'read'"
        :size="14"
        :stroke-width="2.5"
        class="oppacity-100 color-accent"
      />
      <CheckCheck v-else-if="props.status === 'delivered'" :size="14" :stroke-width="2.5" />
      <Check v-else-if="props.status === 'sent'" :size="14" :stroke-width="2.5" />
    </span>
  </div>
</template>
