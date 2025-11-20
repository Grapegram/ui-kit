<script setup lang="ts">
import { computed } from 'vue'

export type Props = {
  side: 'left' | 'right'
  color: string
}

defineOptions({
  name: 'MessageTail',
})

const props = defineProps<Props>()

const tailClasses = computed(() => ({
  'message-tail-right': props.side === 'right',
  'message-tail-left': props.side === 'left',
}))
</script>

<template>
  <svg
    :class="['message-tail', tailClasses]"
    width="6"
    height="10"
    viewBox="0 0 6 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Right Side Tail -->
    <path
      v-if="props.side === 'right'"
      d="M0 0C0 3.21429 1.76471 7.67857 5.29412 8.57143C5.29412 8.57143 6 8.57143 6 9.28572C6 10 5.29412 10 5.29412 10L0 10V0Z"
      :fill="props.color"
    />

    <!-- Left Side Tail -->
    <path
      v-if="props.side === 'left'"
      d="M6 0C6 3.21429 4.23529 7.67857 0.705882 8.57143C0.705882 8.57143 0 8.57143 0 9.28572C0 10 0.705882 10 0.705882 10L6 10V0Z"
      :fill="props.color"
    />
  </svg>
</template>

<style scoped>
.message-tail {
  position: absolute;
  bottom: 0;
  pointer-events: none;
}

.message-tail-right {
  right: -6px;
}

.message-tail-left {
  left: -6px;
}
</style>
