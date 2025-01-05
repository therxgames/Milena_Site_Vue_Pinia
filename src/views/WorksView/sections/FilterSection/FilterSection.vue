<script setup lang="ts">
import { useArtFiltersStore, useArtStore } from '@stores'
import { CategoryFilter, StyleFilter, MaterialFilter, MediumFilter } from '../FilterSection'
import { FilterSectionEmits, FilterSectionProps } from './types'
import { computed, onMounted, watch } from 'vue'
import { useForm } from 'vee-validate'

const props = defineProps<FilterSectionProps>()
const emit = defineEmits<FilterSectionEmits>()

const artFilters = useArtFiltersStore()
const arts = useArtStore()

const { values: filterValues } = useForm()

const filters = computed(() => artFilters.filters)

watch(
  () => filterValues,
  (newValues) => {
    arts.filterArts(newValues)
  },
  {
    deep: true,
  },
)

onMounted(() => {
  artFilters.getAllFilters()
})
</script>

<template>
  <div class="flex flex-col gap-y-6">
    <CategoryFilter :categories="filters.categories" />
    <StyleFilter :styles="filters.styles" />
    <MaterialFilter :materials="filters.materials" />
    <MediumFilter :mediums="filters.mediums" />
  </div>
</template>
