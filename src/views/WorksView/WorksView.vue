<script setup lang="ts">
import { DefaultLayout } from '@layouts'
import { CardPreview } from '@shared'
import { FilterSection } from './sections'
import { useArtFiltersStore, useArtStore } from '@stores'
import { onMounted, ref } from 'vue'
import { Loader } from '@ui'

const artFilters = useArtFiltersStore()
const artStore = useArtStore()

const isLoading = ref(true)

onMounted(async() => {
  isLoading.value = true

  await Promise.all([
    artFilters.getAllFilters(),
    artStore.getAllArts()
  ])

  isLoading.value = false
})
</script>

<template>
  <DefaultLayout>
    <Loader v-if="isLoading" />

    <div v-else class="grid grid-cols-[1fr_5fr] gap-10">
      <FilterSection :filters="artFilters.filters" />

      <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        <CardPreview v-for="item in artStore.arts" :item="item" />
      </div>
    </div>
  </DefaultLayout>
</template>
