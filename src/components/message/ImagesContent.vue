<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

export type Props = {
  images: string[]
  class?: string
}

defineOptions({
  name: 'ImagesContent',
})

const props = defineProps<Props>()

const gridLayout = computed(() => {
  const count = props.images.length

  if (count === 0) return null
  if (count === 1) return 'single'
  if (count === 2) return 'two'
  if (count === 3) return 'three'
  if (count === 4) return 'four'
  return 'many'
})

const gridClasses = computed(() => {
  switch (gridLayout.value) {
    case 'single':
      return 'grid-cols-1'
    case 'two':
      return 'grid-cols-2 gap-1'
    case 'three':
      return 'grid-cols-2 gap-1'
    case 'four':
      return 'grid-cols-2 gap-1'
    case 'many':
      return 'grid-cols-2 gap-1'
    default:
      return ''
  }
})

const getImageClasses = (index: number) => {
  const count = props.images.length

  // For 3 images: first image spans 2 columns
  if (count === 3 && index === 0) {
    return 'col-span-2'
  }

  return ''
}

const getImageStyle = () => {
  const count = props.images.length

  // Single image: allow it to be larger
  if (count === 1) {
    return {
      maxHeight: '400px',
      width: '100%',
      objectFit: 'cover' as const,
    }
  }

  // Multiple images: constrain to grid
  return {
    aspectRatio: '1',
    objectFit: 'cover' as const,
    width: '100%',
    height: '100%',
  }
}
</script>

<template>
  <div v-if="images.length > 0" :class="cn('images-content', props.class)">
    <div :class="cn('grid', gridClasses)">
      <div
        v-for="(image, index) in images"
        :key="index"
        :class="cn('relative overflow-hidden rounded-[var(--radius-md)]', getImageClasses(index))"
      >
        <img
          :src="image"
          :alt="`Image ${index + 1}`"
          :style="getImageStyle()"
          class="block"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.images-content {
  display: block;
}

.images-content img {
  display: block;
}
</style>
