<script setup lang="ts">
import { computed } from 'vue'
import { MultiCheckbox } from '@ui'
import type { MaterialFilterProps, MaterialFilterEmits } from './types'

const props = defineProps<MaterialFilterProps>()
const emit = defineEmits<MaterialFilterEmits>()

const parseArtMaterials = computed(() => {
  const parseData = props.materials?.map((item) => {
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
    v-if="parseArtMaterials.length > 0"
    title="Material"
    name="material_id"
    :options="parseArtMaterials"
    :component="MultiCheckbox"
  />
</template>
