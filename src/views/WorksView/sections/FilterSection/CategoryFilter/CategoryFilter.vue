<script setup lang="ts">
import { computed } from 'vue'
import { CategoryFilterEmits, CategoryFilterProps } from './types'
import { FilterGroup } from '@shared'
import { Select } from '@ui'

const props = defineProps<CategoryFilterProps>()
const emit = defineEmits<CategoryFilterEmits>()

const parseArtCategories = computed(() => {
  const parseData = props.categories?.map((item) => {
    return {
      value: item.id === 19 ? 'all' : item.id,
      title: item.name,
    }
  })

  return parseData || []
})
</script>

<template>
  <FilterGroup
    v-if="parseArtCategories.length > 0"
    title="Category"
    name="category_id"
    :options="parseArtCategories"
    :component="Select"
  />
</template>
