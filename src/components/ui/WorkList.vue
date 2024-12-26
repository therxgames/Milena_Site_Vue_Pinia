<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import WorkItem from './WorkItem.vue'

const modules = [Pagination]
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="3"
    :pagination="{
      clickable: true,
      el: `.js-WorksPagination`,
    }"
    :space-between="30"
    class="mt-[90px]"
  >
    <swiper-slide>
      <WorkItem />
    </swiper-slide>

    <swiper-slide>
      <WorkItem />
    </swiper-slide>

    <swiper-slide>
      <WorkItem />
    </swiper-slide>

    <swiper-slide>
      <WorkItem />
    </swiper-slide>

    <swiper-slide>
      <WorkItem />
    </swiper-slide>
  </swiper>

  <div class="js-WorksPagination text-center my-5"></div>
</template>

<style scoped lang="scss">
:deep(.swiper-pagination-bullet) {
  --swiper-pagination-bullet-horizontal-gap: 7px;
  border: 1px solid #fff;
  background: transparent;
  width: 12px;
  height: 12px;
  opacity: 1;
}

:deep(.swiper-pagination-bullet-active) {
  background: theme('colors.red');
  border: none;
}
</style>
