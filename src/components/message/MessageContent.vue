<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import ImagesContent from './ImagesContent.vue'
import TextContent from './TextContent.vue'

export type Props = {
  text: string | null
  images: string[]
  class?: string
}

defineOptions({
  name: 'MessageContent',
})

const props = defineProps<Props>()

const hasText = computed(() => props.text !== null && props.text.trim().length > 0)
const hasImages = computed(() => props.images.length > 0)
const hasBoth = computed(() => hasText.value && hasImages.value)
const isSingleImage = computed(() => props.images.length === 1 && !hasText.value)

const contentClasses = computed(() => ({
  'p-3': hasText.value || props.images.length > 1,
  'p-0': isSingleImage.value,
}))
</script>

<template>
  <div :class="cn('message-content', props.class, contentClasses)">
    <!-- Images above text if both exist -->
    <ImagesContent
      v-if="hasImages"
      :images="props.images"
      :class="cn({ 'mb-2': hasBoth, 'rounded-[inherit]': isSingleImage })"
    />

    <!-- Text content with markdown -->
    <TextContent v-if="hasText" :text="props.text!" />
  </div>
</template>

<style scoped>
.message-content {
  display: block;
}
</style>
