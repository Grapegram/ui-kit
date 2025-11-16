<script setup lang="ts">
import { computed } from 'vue'
import { cva, type VariantProps } from 'class-variance-authority'
import { Primitive, type PrimitiveProps } from 'reka-ui'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'BaseTypography',
})

const typographyVariants = cva('text-foreground', {
  variants: {
    variant: {
      h1: 'text-6xl',
      h2: 'text-5xl',
      h3: 'text-4xl',
      h4: 'text-3xl',
      h5: 'text-2xl',
      h6: 'text-xl',
      body: 'text-base',
      'body-sm': 'text-sm',
      caption: 'text-xs',
    },
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      medium: 'font-medium',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    variant: 'body',
    weight: 'regular',
  },
})

const getDefaultTagForVariant = (variant: VariantProps<typeof typographyVariants>['variant']) => {
  const tagMap = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'p',
    'body-sm': 'p',
    caption: 'span',
  } as const

  return tagMap[variant || 'body']
}

export type TypographyVariants = VariantProps<typeof typographyVariants>
export type TypographyVariant = TypographyVariants['variant']
export type TypographyWeight = TypographyVariants['weight']

interface TypographyProps extends PrimitiveProps {
  variant?: TypographyVariants['variant']
  weight?: TypographyVariants['weight']
  class?: string
}

const props = withDefaults(defineProps<TypographyProps>(), {
  variant: 'body',
  weight: 'regular',
  italic: false,
})

const componentTag = computed(() => {
  return props.as || getDefaultTagForVariant(props.variant)
})

const classes = computed(() => {
  return cn(
    typographyVariants({
      variant: props.variant,
      weight: props.weight,
    }),
    props.class,
  )
})
</script>

<template>
  <Primitive :as="componentTag" :as-child="asChild" :class="classes">
    <slot />
  </Primitive>
</template>
