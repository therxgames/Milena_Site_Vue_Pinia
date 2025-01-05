<script setup lang="ts">
import { DefaultLayout } from '@layouts'
import { CardPreview } from '@shared'
import { FilterSection } from './sections'
import { useArtStore } from '@stores'
import { onMounted } from 'vue'

const artStore = useArtStore()

onMounted(() => {
  artStore.getAllArts()
})
</script>

<template>
  <DefaultLayout>
    <div class="grid grid-cols-[1fr_5fr] gap-10">
      <FilterSection />

      <div class="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-8">
        <CardPreview v-for="item in artStore.arts" :item="item" />
      </div>
    </div>
  </DefaultLayout>
</template>
