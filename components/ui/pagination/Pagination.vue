<script setup lang="ts">
import type { PaginationEmits, PaginationProps } from './types';

const props = defineProps<PaginationProps>()
const emit = defineEmits<PaginationEmits>()
</script>

<template>
  <div class="flex justify-center gap-3">
    <button class="pagination-button">
      &lt;
    </button>

    <button
      class="pagination-button"
      :class="{ 'active': activePage == page }"
      v-for="page in pagesCount"
      :key="page"
      @click="emit('update:activePage', page)"
    >
      {{ page }}
    </button>

    <button class="pagination-button">
      &gt;
    </button>
  </div>
</template>

<style scoped lang="scss">
  .pagination-button {
    height: 50px;
    width: 50px;
    font-size: 18px;
    border-radius: 50%;
    border: 2px solid theme('colors.red');
    transition: all 0.2s;

    &:hover, &.active {
      background: theme('colors.red');
    }
  }
</style>
