<script setup lang="ts">
import { DefaultLayout } from '@layouts'
import { CardDetail } from '@shared'
import { useArtStore } from '@stores'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const artStore = useArtStore()
const routeId = route.params.id

onMounted(() => {
  artStore.getArtById(Number(routeId))
})

watch(
  () => routeId,
  (newId, oldId) => {
    artStore.getArtById(Number(newId))
  },
)
</script>

<template>
  <DefaultLayout>
    <CardDetail v-if="artStore.art" :item="artStore.art" />
  </DefaultLayout>
</template>
