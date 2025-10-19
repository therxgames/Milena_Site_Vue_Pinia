<script setup lang="ts">
import type { ArtsDetailResponseApi } from '@app-types/api/artDetailApi';

const route = useRoute()

const { data: art, status } = await useApiFetch<ArtsDetailResponseApi>(
  `/api/arts/${route.params.id}`,
)
</script>

<template>
  <UiLoader v-if="status === 'pending'" />

  <SharedCardDetail v-else-if="art?.result" :item="art.result" />
</template>
