<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import ImagesContent from './ImagesContent.vue'
import TextContent from './TextContent.vue'
import MessageFooter from './MessageFooter.vue'
import type { MessageStatus } from './MessageFooter.vue'

export type Props = {
  text: string | null
  images: string[]
  hasHeader?: boolean
  timestamp: Date
  status?: MessageStatus
  class?: string
}

defineOptions({
  name: 'MessageContent',
})

const props = withDefaults(defineProps<Props>(), {
  hasHeader: false,
  status: 'sent',
})

const hasText = computed(() => props.text !== null && props.text.trim().length > 0)
const hasImages = computed(() => props.images.length > 0)
const isSingleImage = computed(() => props.images.length === 1 && !hasText.value)
const hasOnlyImages = computed(() => !hasText.value && hasImages.value)

const contentClasses = computed(() => ({
  'px-3 py-3': hasImages.value || hasText.value,
  'pt-0': props.hasHeader,
  'p-0': isSingleImage.value,
}))

const imageMessageFooterClasses = computed(() => ({
  'bottom-4 right-4': hasImages.value,
  'bottom-1 right-1': isSingleImage.value,
}))
</script>

<template>
  <div :class="cn('flex flex-col items-center justify-center gap-3', props.class, contentClasses)">
    <!-- Images above text if both exist, or standalone images -->
    <template v-if="hasImages">
      <ImagesContent :images="props.images" class="w-full" />

      <!-- Footer overlay for only-images messages -->
      <MessageFooter
        v-if="hasOnlyImages"
        :timestamp="props.timestamp"
        :status="props.status"
        :overlay-mode="true"
        :class="cn('absolute', imageMessageFooterClasses)"
      />
    </template>

    <!-- Text content with inline footer -->
    <div v-if="hasText" class="flex w-full items-end justify-between">
      <TextContent :text="props.text!" class="flex-1 break-words" />

      <!-- Inline footer for text messages -->
      <MessageFooter
        :timestamp="props.timestamp"
        :status="props.status"
        :overlay-mode="false"
        class="ml-4 inline-flex translate-y-1 align-bottom"
      />
    </div>
  </div>
</template>
