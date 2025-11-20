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
    width="8"
    height="14"
    viewBox="0 0 8 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Right Side Tail -->
    <path
      v-if="props.side === 'right'"
      d="
      M2 4C2 7.21429 3.76471 11.6786 7.29412 12.5714C7.29412 12.5714 8 12.5714 8 13.2857C8 14 7.29412 14 7.29412 14H0V0L2 4Z
"
      :fill="props.color"
    />

    <!-- Left Side Tail -->
    <path
      v-if="props.side === 'left'"
      d="M6 4C6 7.21429 4.23529 11.6786 0.705882 12.5714C0.705882 12.5714 0 12.5714 0 13.2857C0 14 0.705882 14 0.705882 14H8V0L6 4Z"
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
