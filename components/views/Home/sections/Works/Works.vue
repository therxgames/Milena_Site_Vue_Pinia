<script setup lang="ts">
import type { ArtModel } from '@app-types/models';
import { WorkList } from './WorkList'

import type { WorksEmits, WorksProps } from './types'
import type { ArtsResponseApi } from '@app-types/api/artsApi';

const props = defineProps<WorksProps>()
const emit = defineEmits<WorksEmits>()

const { data } = await useApiFetch<ArtsResponseApi>(
  '/api/arts',
  {
    query: {
      is_random: true,
      limit: 5,
    },
  }
)
</script>

<template>
  <div class="pt-5 xl:pt-[150px]">
    <div class="title_box relative">
      <Title class="xl:pt-5">Works</Title>

      <p class="pt-2.5 text-xs xl:text-xl font-bold uppercase text-red tracking-widest">Things we've made</p>
    </div>
  </div>

  <WorkList v-if="data" :works="data.results" />
</template>

<style scoped lang="scss">
.title_box::before {
  display: none;

  @screen xl {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 3px;
    background-color: theme('colors.red');
  }
}
</style>
