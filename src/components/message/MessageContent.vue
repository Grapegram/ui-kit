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
  side: 'left' | 'right'
  timestamp?: string | Date
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
  'px-3 pb-3': hasText.value || props.images.length > 1,
  'pt-1': (hasText.value || props.images.length > 1) && props.hasHeader && !hasImages.value,
  'pt-3':
    ((hasText.value || props.images.length > 1) && !props.hasHeader) ||
    ((hasText.value || props.images.length > 1) && props.hasHeader && hasImages.value),
  'p-0': isSingleImage.value,
}))
</script>

<template>
  <div :class="cn('message-content', props.class, contentClasses)">
    <!-- Images above text if both exist, or standalone images -->
    <template v-if="hasImages">
      <ImagesContent :images="props.images" class="w-full" />

      <!-- Footer overlay for only-images messages -->
      <MessageFooter
        v-if="hasOnlyImages && props.timestamp"
        :timestamp="props.timestamp"
        :status="props.status"
        :side="props.side"
        :overlay-mode="true"
      />
    </template>

    <!-- Text content with inline footer -->
    <div v-if="hasText" class="flex items-end justify-between">
      <TextContent :text="props.text!" :has-footer="!!props.timestamp" class="flex-1 break-words" />

      <!-- Inline footer for text messages -->
      <MessageFooter
        v-if="props.timestamp"
        :timestamp="props.timestamp"
        :status="props.status"
        :side="props.side"
        :overlay-mode="false"
        class="inline-footer nowrap"
      />
    </div>
  </div>
</template>

<style scoped>
.message-content {
  display: block;
}

.inline-footer {
  display: inline-flex;
  margin-left: 0.25rem;
  vertical-align: bottom;
}
</style>
