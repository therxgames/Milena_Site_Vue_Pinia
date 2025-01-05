<script setup lang="ts">
import { serviceItems } from '@types'
import { ServiceItem } from '../ServiceItem'
</script>

<template>
  <div class="pt-[90px] grid grid-cols-3 gap-[30px]">
    <ServiceItem
      v-for="item in serviceItems"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :description="item.description"
    />
  </div>
</template>

<style></style>
