<script setup lang="ts">
import type { VariantProps } from 'class-variance-authority'
import { cva } from 'class-variance-authority'
import type { HTMLAttributes } from 'vue'
import { AvatarRoot } from 'reka-ui'
import { cn } from '@/lib/utils'

const avatarVariants = cva('relative flex shrink-0 overflow-hidden rounded-full', {
  variants: {
    size: {
      sm: 'size-10',
      base: 'size-16',
      lg: 'size-32',
    },
  },
  defaultVariants: {
    size: 'base',
  },
})

export type AvatarVariants = VariantProps<typeof avatarVariants>

interface Props {
  size?: AvatarVariants['size']
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  size: 'base',
})

defineOptions({
  name: 'BaseAvatar',
})
</script>

<template>
  <AvatarRoot data-slot="avatar" :class="cn(avatarVariants({ size }), props.class)">
    <slot />
  </AvatarRoot>
</template>
