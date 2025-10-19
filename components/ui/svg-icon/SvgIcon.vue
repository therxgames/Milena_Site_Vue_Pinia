<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '@config'

import type { SvgIconEmits, SvgIconProps } from './types'

const props = defineProps<SvgIconProps>()
const emit = defineEmits<SvgIconEmits>()

const icon = computed(() => icons[props.name])
const fill = computed(() => props.fill)
</script>

<template>
  <div
    v-html="icon"
    class="svg-container"
  />
</template>

<style scoped>
.svg-container :deep(svg) {
  color: v-bind(fill);
  width: 100%;
  height: auto;
}
</style>
