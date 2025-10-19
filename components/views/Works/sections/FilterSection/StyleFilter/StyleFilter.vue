<script setup lang="ts">
import { computed } from 'vue'
import { MultiCheckbox } from '@ui'
import type { StyleFilterEmits, StyleFilterProps } from './types'

const props = defineProps<StyleFilterProps>()
const emit = defineEmits<StyleFilterEmits>()

const parseArtStyles = computed(() => {
  const parseData = props.styles?.map((item) => {
    return {
      value: item.id,
      title: item.name,
    }
  })

  return parseData || []
})
</script>

<template>
  <SharedFilterGroup
    v-if="parseArtStyles.length > 0"
    title="Style"
    name="style_id"
    :options="parseArtStyles"
    :component="MultiCheckbox"
  />
</template>
