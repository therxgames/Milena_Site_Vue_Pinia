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

    <div v-else class="mt-5 xl:mt-0 xl:grid xl:grid-cols-[1fr_5fr] xl:gap-10">
      <FilterSection class="hidden xl:block" :filters="artFilters.filters" />

      <div class="grid grid-cols-2 xl:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        <CardPreview v-if="artStore.arts.length" v-for="item in artStore.arts" :item="item" />

        <p v-else class="text-center text-4xl font-bold col-span-full text-gray-500">
          There are no arts to display.
        </p>
      </div>
    </div>
  </DefaultLayout>
</template>
