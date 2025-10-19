<script setup lang="ts">
import { Button, Title } from '@ui'
import type { CardDetailEmits, CardDetailProps } from './types'

const props = defineProps<CardDetailProps>()
const emit = defineEmits<CardDetailEmits>()
</script>

<template>
  <div class="mt-3 xl:grid xl:grid-cols-[5fr_3fr] xl:gap-x-[80px]">
    <div class="flex flex-col gap-y-1.5 xl:hidden">
      <Title class="xl:pt-3">{{ item.title }}, {{ item.year }}</Title>

      <p class="text-xs xl:pt-2.5 font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
    </div>

    <div class="bg-white text-center mt-2 flex justify-center items-center xl:mt-0">
      <picture>
        <img class="h-[200px] xl:h-[400px]" :src="item.image_url" />
      </picture>
    </div>

    <div class="flex flex-col">
      <div class="title_box relative hidden xl:flex xl:flex-col gap-y-1.5">
        <Title class="xl:pt-3">{{ item.title }}, {{ item.year }}</Title>

        <p class="text-xs xl:pt-2.5 xl:text-xl font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
      </div>

      <div class="flex-1 mt-4 xl:mt-6 h-full">
        <div class="bg-gray-normal p-3 xl:p-6 h-full flex flex-col">
          <div class="flex flex-col gap-y-1.5 xl:gap-y-3">
            <p class="xl:text-xl">
              <span class="font-bold">Category:</span>
              {{ item.category.name }}
            </p>
            <p class="xl:text-xl"><span class="font-bold">Styles:</span> {{ item.style.name }}</p>
            <p class="xl:text-xl"><span class="font-bold">Mediums:</span> {{ item.medium.name }}</p>
            <p class="xl:text-xl"><span class="font-bold">Size:</span> {{ item.size }}</p>
          </div>

          <div class="flex justify-between mt-4">
            <Button class="mt-auto">Add to cart</Button>
            <p class="mt-auto font-bold text-3xl">{{ item.price }}$</p>
          </div>
        </div>
      </div>
    </div>

    <div class="title_box relative mt-4 xl:mt-[100px]">
      <Title class="xl:pt-3">Description</Title>

      <p class="leading-6 mt-4 xl:mt-5 xl:text-xl xl:font-bold">
        {{ item.description }}
      </p>
    </div>

    <div class="title_box relative mt-4 xl:mt-[100px] flex flex-col">
      <Title class="xl:pt-3">Details</Title>

      <div class="xl:mt-4 mt-5 flex">
        <div class="bg-gray-normal p-3 xl:p-6 flex flex-col w-full gap-y-1.5 xl:gap-y-3">
          <p class="xl:text-xl"><span class="font-bold">Rarity:</span> {{ item.rarity.name }}</p>
          <p class="xl:text-xl"><span class="font-bold">Ready to Hang:</span> {{ item.hanged ? 'Yes' : 'No' }}</p>
          <p class="xl:text-xl"><span class="font-bold">Frame:</span> {{ item.framed ? 'Yes' : 'No' }}</p>
          <p class="xl:text-xl"><span class="font-bold">Packaging:</span> {{ item.packaging.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.title_box::before {
  display: none;
}

@screen xl {
  .title_box::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 3px;
    background-color: theme('colors.red');
  }
}
</style>
