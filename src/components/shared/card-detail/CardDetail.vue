<script setup lang="ts">
import { Works } from '@/views/HomeView/sections';
import { CardDetailEmits, CardDetailProps } from './types'
import { Button, Title } from '@ui'

const props = defineProps<CardDetailProps>()
const emit = defineEmits<CardDetailEmits>()
</script>

<template>
  <div class="mt-3 xl:grid xl:grid-cols-[5fr_3fr] xl:gap-x-[150px]">
    <div class="flex flex-col gap-y-1.5 xl:hidden">
      <Title class="xl:pt-3">{{ item.title }}, {{ item.year }}</Title>

      <p class="text-xs xl:pt-2.5 font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
    </div>

    <div class="bg-white text-center mt-2 flex justify-center">
      <picture>
        <img class="h-[200px] xl:h-[400px]" :src="item.image_url" />
      </picture>
    </div>

    <div class="flex flex-col">
      <div class="hidden xl:flex xl:flex-col gap-y-1.5">
        <Title class="xl:pt-3">{{ item.title }}, {{ item.year }}</Title>

        <p class="text-xs xl:pt-2.5 xl:text-xl font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
      </div>

      <div class="flex-1 mt-4 xl:mt-6 h-full">
        <div class="bg-gray-normal p-3 xl:p-6 h-full flex flex-col">
          <div class="flex flex-col gap-y-1.5 xl:gap-y-3">
            <p class="text-xs xl:text-xl">
              <span class="font-bold">Category:</span>
              {{ item.art_categories.name }}
            </p>
            <p class="text-xs xl:text-xl"><span class="font-bold">Styles:</span> {{ item.art_styles.name }}</p>
            <p class="text-xs xl:text-xl"><span class="font-bold">Mediums:</span> {{ item.art_mediums.name }}</p>
            <p class="text-xs xl:text-xl"><span class="font-bold">Size:</span> {{ item.size }}</p>
          </div>

          <!-- <div class="flex justify-between mt-auto">
            <Button class="mt-auto">Add to cart</Button>
            <p class="mt-auto font-bold text-3xl">{{ item.price }}$</p>
          </div> -->
        </div>
      </div>
    </div>

    <div class="mt-4 xl:mt-[100px]">
      <Title class="xl:pt-3">Description</Title>

      <p class="text-xs leading-5 mt-4 xl:mt-5 xl:text-xl xl:font-bold">
        {{ item.description }}
      </p>
    </div>

    <div class="mt-4 xl:mt-[100px] flex flex-col">
      <Title class="xl:pt-3">Details</Title>

      <div class="xl:mt-4 mt-5 flex">
        <div class="bg-gray-normal p-3 xl:p-6 flex flex-col w-full gap-y-1.5 xl:gap-y-3">
          <p class="text-xs xl:text-xl"><span class="font-bold">Rarity:</span> {{ item.art_rarities.name }}</p>
          <p class="text-xs xl:text-xl"><span class="font-bold">Ready to Hang:</span> {{ item.hanged ? 'Yes' : 'No' }}</p>
          <p class="text-xs xl:text-xl"><span class="font-bold">Frame:</span> {{ item.framed ? 'Yes' : 'No' }}</p>
          <p class="text-xs xl:text-xl"><span class="font-bold">Packaging:</span> {{ item.art_packaging.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
