<script setup lang="ts">
import { services } from '@config';
import { ServiceItem } from '../ServiceItem'
</script>

<template>
  <div class="pt-5 xl:pt-[90px] grid gap-3 xl:grid-cols-3 xl:gap-[30px]">
    <ServiceItem
      v-for="item in services"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<style></style>
