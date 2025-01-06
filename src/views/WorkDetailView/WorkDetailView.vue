<script setup lang="ts">
import { DefaultLayout } from '@layouts'
import { CardDetail } from '@shared'
import { useArtStore } from '@stores'
import { Loader } from '@ui'
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const artStore = useArtStore()
const routeId = route.params.id

const isLoading = ref(true)

onMounted(async () => {
  isLoading.value = true

  await artStore.getArtById(Number(routeId))

  isLoading.value = false
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
    <Loader v-if="isLoading" />

    <CardDetail v-else-if="artStore.art" :item="artStore.art" />
  </DefaultLayout>
</template>
