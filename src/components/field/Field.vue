<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import type { FieldVariants } from '.'
import { cn } from '@/lib/utils'
import { fieldVariants } from '.'

const props = defineProps<{
  class?: HTMLAttributes['class']
  orientation?: FieldVariants['orientation']
  invalid?: boolean
  disabled?: boolean
}>()

defineOptions({
  name: 'BaseField',
})
</script>

<template>
  <div
    role="group"
    data-slot="field"
    :data-orientation="orientation"
    :data-invalid="invalid"
    :data-disabled="disabled"
    :class="cn(fieldVariants({ orientation }), props.class)"
  >
    <slot />
  </div>
</template>
