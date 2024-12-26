<script setup lang="ts">
import { mockData } from '@/utils'
import ServiceCard from './ServiceCard.vue'
</script>

<template>
  <div class="pt-[90px] grid grid-cols-3 gap-[30px]">
    <ServiceCard
      v-for="item in mockData"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<style></style>
