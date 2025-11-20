<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()

defineOptions({
  name: 'BaseSkeleton',
})
</script>

<template>
  <div data-slot="skeleton" :class="cn('bg-secondary animate-pulse rounded-sm', props.class)" />
</template>
