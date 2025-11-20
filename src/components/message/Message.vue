<script lang="ts">
export type Side = 'left' | 'right'
export type Color = 'primary' | 'secondary'
export type Variants = 'first' | 'middle' | 'last' | 'standalone'

export type User = {
  username: string
  color?: string
}
export type MessageContent = {
  text: string | null
  images: string[]
}

export type Props = {
  side: Side
  color: Color
  variant: Variants
  user: User
  content: MessageContent
  showHeader: boolean
  class?: HTMLAttributes['class']
}
</script>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { computed } from 'vue'
import { cn } from '@/lib/utils'
import MessageContent from './MessageContent.vue'
import MessageHeader from './MessageHeader.vue'
import MessageTail from './MessageTail.vue'

defineOptions({
  name: 'BaseMessage',
})
const props = defineProps<Props>()

const messageVariants = computed(() => ({
  'rounded-bl-[var(--radius-message-small)]': props.variant === 'first' && props.side === 'left',
  'rounded-l-[var(--radius-message-small)]': props.variant === 'middle' && props.side === 'left',
  'rounded-tl-[var(--radius-message-small)]': props.variant === 'last' && props.side === 'left',
  'rounded-br-[var(--radius-message-small)]': props.variant === 'first' && props.side === 'right',
  'rounded-r-[var(--radius-message-small)]': props.variant === 'middle' && props.side === 'right',
  'rounded-tr-[var(--radius-message-small)]': props.variant === 'last' && props.side === 'right',
  'rounded-bl-none':
    showTail.value &&
    props.side === 'left' &&
    (props.variant === 'standalone' || props.variant === 'last'),
  'rounded-br-none':
    showTail.value &&
    props.side === 'right' &&
    (props.variant === 'standalone' || props.variant === 'last'),
}))

const backgroudColor = computed(
  () =>
    ({
      primary: 'var(--primary)',
      secondary: 'var(--secondary)',
    })[props.color],
)

const showTail = computed(() => props.variant === 'standalone' || props.variant === 'last')

const showHeader = computed(
  () =>
    props.showHeader &&
    (props.variant === 'first' || props.variant === 'standalone') &&
    (!!props.content.text || (!props.content.text && props.content.images.length === 1)),
)
</script>

<template>
  <div
    :class="cn('base-message relative max-w-full', props.class)"
    :style="`--message-bg: ${backgroudColor}`"
  >
    <div
      :class="
        cn(
          'relative overflow-hidden rounded-[var(--radius-message-large)] bg-[var(--message-bg)]',
          messageVariants,
        )
      "
    >
      <MessageHeader v-if="showHeader" :username="props.user.username" :color="props.user.color" />
      <MessageContent
        :text="props.content.text"
        :images="props.content.images"
        :has-header="showHeader"
      />
    </div>

    <!-- Message Tail -->
    <MessageTail v-if="showTail" :side="props.side" :color="backgroudColor" />
  </div>
</template>

<style scoped>
.base-message {
  --radius-message-large: var(--radius-2xl);
  --radius-message-small: var(--radius-md);
}

.message-tail-right > div {
  border-bottom-right-radius: 0;
}

.message-tail-left > div {
  border-bottom-left-radius: 0;
}
</style>
