<script setup lang="ts">
import { computed } from 'vue'
import type { CategoryFilterEmits, CategoryFilterProps } from './types'
import { Select } from '@ui'

const props = defineProps<CategoryFilterProps>()
const emit = defineEmits<CategoryFilterEmits>()

const parseArtCategories = computed(() => {
  return props.categories.map((item) => ({
      value: item.id,
      title: item.name,
  })
)})
</script>

<template>
  <SharedFilterGroup
    v-if="categories"
    title="Category"
    name="category_id"
    :options="parseArtCategories"
    :component="Select"
  />
</template>
