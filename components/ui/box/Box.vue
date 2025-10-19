<script setup lang="ts">
import type { BoxEmits, BoxProps } from './types';

const props = defineProps<BoxProps>()
const emit = defineEmits<BoxEmits>()
</script>

<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss"></style>
