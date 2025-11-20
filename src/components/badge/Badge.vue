<script setup lang="ts">
import type { PrimitiveProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full min-w-8 min-h-7 px-2 py-1 text-xs font-medium whitespace-nowrap shrink-0 transition-colors',
  {
    variants: {
      variant: {
        base: 'bg-primary text-primary-foreground',
        active: 'bg-accent text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'base',
    },
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>

const props = defineProps<
  PrimitiveProps & {
    variant?: BadgeVariants['variant']
    class?: HTMLAttributes['class']
  }
>()

const delegatedProps = reactiveOmit(props, 'class')

defineOptions({
  name: 'BaseBadge',
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :class="cn(badgeVariants({ variant }), props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </Primitive>
</template>
