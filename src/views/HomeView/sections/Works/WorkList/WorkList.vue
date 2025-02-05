<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { WorkListEmits, WorkListProps } from './types'
import { WorkItem } from '../WorkItem'

const props = defineProps<WorkListProps>()
const emit = defineEmits<WorkListEmits>()

const modules = [Pagination]
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{
      clickable: true,
      el: `.js-WorksPagination`,
    }"
    :space-between="30"
    :breakpoints="{
      1024: {
        slidesPerView: 3
      }
    }"
    class="mt-3 xl:mt-[90px]"
  >
    <swiper-slide v-for="work in works">
      <RouterLink :to="`/works/${work.id}`">
        <WorkItem :item="work" />
      </RouterLink>
    </swiper-slide>
  </swiper>

  <div class="text-center js-WorksPagination my-2 xl:my-5"></div>
</template>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet) {
  --swiper-pagination-bullet-horizontal-gap: 7px;
  border: 1px solid #fff;
  background: transparent;
  width: 12px;
  height: 12px;
  opacity: 1;
  transform: scale(1);
  @screen xl {
    width: 12px;
    height: 12px;
  }
}

:deep(.swiper-pagination-bullet-active) {
  background: theme('colors.red');
  border: none;
}
</style>
