<script setup lang="ts">
import { computed } from 'vue'
import { MultiCheckbox } from '@ui'
import type { MediumFilterProps, MediumFilterEmits } from './types'

const props = defineProps<MediumFilterProps>()
const emit = defineEmits<MediumFilterEmits>()

const parseArtMediums = computed(() => {
  const parseData = props.mediums?.map((item) => {
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
    v-if="parseArtMediums.length > 0"
    title="Medium"
    name="medium_id"
    :options="parseArtMediums"
    :component="MultiCheckbox"
  />
</template>
