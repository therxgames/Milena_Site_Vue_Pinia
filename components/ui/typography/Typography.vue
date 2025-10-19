<script setup lang="ts">
import type { TypographyEmits, TypographyProps } from './types';

const props = defineProps<TypographyProps>()
const emit = defineEmits<TypographyEmits>()
</script>

<template>
  <component :is="component || 'p'">
    <slot />
  </component>
</template>

<style scoped lang="scss"></style>
