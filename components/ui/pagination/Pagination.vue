<script setup lang="ts">
import type { PaginationEmits, PaginationProps } from './types';

const props = defineProps<PaginationProps>()
const emit = defineEmits<PaginationEmits>()

const MAX_VISIBLE_PAGES = 5

const visiblePages = computed(() => {
  const total = props.pagesCount
  const current = props.activePage
  const half = Math.floor(MAX_VISIBLE_PAGES / 2)

  let start = Math.max(1, current - half)
  let end = Math.min(total, current + half)

  if (current <= half) {
    end = Math.min(total, MAX_VISIBLE_PAGES)
  }

  if (current + half >= total) {
    start = Math.max(1, total - MAX_VISIBLE_PAGES + 1)
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const prevPageHandler = () => {
  if (props.activePage > 1) emit('update:activePage', props.activePage - 1)
}
const nextPageHandler = () => {
  if (props.activePage < props.pagesCount) emit('update:activePage', props.activePage + 1)
}
</script>

<template>
  <div class="flex justify-center gap-3">
    <button class="pagination-button" @click="prevPageHandler" :disabled="activePage === 1">
      &lt;
    </button>

    <button
      class="pagination-button"
      :class="{ 'active': activePage == page }"
      v-for="page in visiblePages"
      :key="page"
      @click="emit('update:activePage', page)"
    >
      {{ page }}
    </button>

    <button class="pagination-button" @click="nextPageHandler" :disabled="activePage === pagesCount">
      &gt;
    </button>
  </div>
</template>

<style scoped lang="scss">
  .pagination-button {
    height: 30px;
    width: 30px;
    font-size: 12px;
    border-radius: 50%;
    border: 2px solid theme('colors.red');
    transition: all 0.2s;



    &:hover, &.active {
      background: theme('colors.red');
    }

    &:disabled {
      user-select: none;
      background: transparent;
      opacity: 0.5;
    }

    @screen xl {
      height: 50px;
      width: 50px;
      font-size: 18px;
    }
  }
</style>
