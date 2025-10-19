<script setup lang="ts">
import type { FilterGroupProps, FilterGroupEmits } from './types'

const props = defineProps<FilterGroupProps>()
const emit = defineEmits<FilterGroupEmits>()
</script>

<template>
  <div>
    <p class="font-bold uppercase text-red tracking-wider text-sm">{{ title }}</p>
    <component :is="component" :title="title" :name="name" :options="options" class="mt-2" />
  </div>
</template>
