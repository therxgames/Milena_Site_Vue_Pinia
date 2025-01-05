<script setup lang="ts">
import { CardPreviewEmits, CardPreviewProps } from './types'

const props = defineProps<CardPreviewProps>()
const emit = defineEmits<CardPreviewEmits>()
</script>

<template>
  <div class="flex flex-col gap-y-2">
    <div class="relative group">
      <RouterLink :to="`/works/${item.id}`">
        <picture class="hover:brightness-[0.4] hover:cursor-pointer transition-all">
          <img :src="item.image_url" />
        </picture>
      </RouterLink>

      <p
        class="opacity-0 group-hover:opacity-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold text-center pointer-events-none"
      >
        Go to art
      </p>
    </div>

    <div class="flex flex-col gap-y-3">
      <div class="flex items-center justify-between">
        <p class="font-bold">{{ item.title }}</p>
        <p class="text-xs">{{ item.art_categories.name }}, {{ item.size }}</p>
      </div>

      <div class="flex justify-between">
        <p class="text-sm font-bold">{{ item.art_countries.name }}</p>
        <p class="text-sm font-bold">{{ item.price }}$</p>
      </div>
    </div>
  </div>
</template>
