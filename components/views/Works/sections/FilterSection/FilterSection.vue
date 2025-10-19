<script setup lang="ts">
import { useField } from 'vee-validate';
import { CategoryFilter, StyleFilter, MaterialFilter, MediumFilter } from '.'
import type { FilterSectionEmits, FilterSectionProps } from './types'

interface FilterModel {
  category?: string
  style?: string
  material?: string
  medium?: string
}

const props = defineProps<FilterSectionProps>()
const emit = defineEmits<FilterSectionEmits>()

const model = defineModel<FilterModel>({
  default: {
    category: undefined,
    style: undefined,
    material: undefined,
    medium: undefined
  }
})

const { value: categoryValue } = useField<string>('category_id')
const { value: styleValue } = useField<number[]>('style_id')
const { value: materialValue } = useField<number[]>('material_id')
const { value: mediumValue } = useField<number[]>('medium_id')

watch(() => categoryValue?.value, (value) => {
  model.value.category = value || undefined
})

watch(() => styleValue?.value, (value) => {
  model.value.style = Array.isArray(value) ? value.join() : value || undefined
})

watch(() => materialValue?.value, (value) => {
  model.value.material = Array.isArray(value) ? value.join() : value || undefined
})

watch(() => mediumValue?.value, (value) => {
  model.value.medium = Array.isArray(value) ? value.join() : value || undefined
})
</script>

<template>
  <div class="hidden xl:flex flex-col gap-6">
    <CategoryFilter :categories="filterCategories.categories" />
    <StyleFilter :styles="filterCategories.styles" />
    <MaterialFilter :materials="filterCategories.materials" />
    <MediumFilter :mediums="filterCategories.media" />
  </div>
</template>
