<script setup lang="ts">
import { CardDetailEmits, CardDetailProps } from './types'
import { Button } from '@ui'

const props = defineProps<CardDetailProps>()
const emit = defineEmits<CardDetailEmits>()
</script>

<template>
  <div class="grid grid-cols-[5fr_3fr] gap-x-[150px]">
    <div class="bg-white text-center flex justify-center">
      <picture>
        <img class="h-[400px]" :src="item.image_url" />
      </picture>
    </div>

    <div class="flex flex-col">
      <div class="title_box relative">
        <h1 class="text-5xl leading-tight font-bold pt-3">{{ item.title }}, {{ item.year }}</h1>

        <p class="pt-2.5 font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
      </div>

      <div class="flex-1 mt-6 h-full">
        <div class="bg-gray-normal p-5 h-full flex flex-col">
          <div class="flex flex-col gap-y-3">
            <p class="">
              <span class="font-bold">Category:</span>
              {{ item.art_categories.name }}
            </p>
            <p class=""><span class="font-bold">Styles:</span> {{ item.art_styles.name }}</p>
            <p class=""><span class="font-bold">Mediums:</span> {{ item.art_mediums.name }}</p>
            <p class=""><span class="font-bold">Size:</span> {{ item.size }}</p>
          </div>

          <div class="flex justify-between mt-auto">
            <Button class="mt-auto">Add to cart</Button>
            <p class="mt-auto font-bold text-3xl">{{ item.price }}$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-[100px]">
      <div class="title_box relative">
        <h1 class="text-5xl leading-tight font-bold pt-3">Description</h1>
      </div>

      <p class="mt-5 font-bold">
        {{ item.description }}
      </p>
    </div>

    <div class="mt-[100px] flex flex-col">
      <div class="title_box relative">
        <h1 class="text-5xl leading-tight font-bold pt-3">Details</h1>
      </div>

      <div class="mt-5 flex">
        <div class="bg-gray-normal p-5 flex flex-col w-full gap-3">
          <p class=""><span class="font-bold">Rarity:</span> {{ item.art_rarities.name }}</p>
          <p class=""><span class="font-bold">Ready to Hang:</span> {{ item.hanged }}</p>
          <p class=""><span class="font-bold">Frame:</span> {{ item.framed }}</p>
          <p class=""><span class="font-bold">Packaging:</span> {{ item.art_packaging.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
