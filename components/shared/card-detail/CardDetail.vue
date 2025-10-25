<script setup lang="ts">
import { Button, Title } from '@ui'
import type { CardDetailEmits, CardDetailProps } from './types'

const props = defineProps<CardDetailProps>()
const emit = defineEmits<CardDetailEmits>()

const modalId = useId()
const modalStore = useModalStore()
</script>

<template>
  <div class="mt-3 xl:grid xl:grid-cols-[5fr_3fr] xl:gap-x-[150px]">
    <div class="flex flex-col gap-y-1.5 xl:hidden">
      <Title class="xl:pt-3">{{ item.title }}, {{ item.year }}</Title>

      <p class="text-xs xl:pt-2.5 font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
    </div>

    <div class="bg-[#1a1a1a] bg-[url('https://www.transparenttextures.com/patterns/dark-mosaic.png')] p-6 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-white/10 flex justify-center mt-4 xl:mt-0">
      <picture
        class="hover:brightness-[0.4] transition-all duration-300 hover:cursor-zoom-in"
        @click="modalStore.openModal(modalId)"
      >
        <img class="max-h-[350px] xl:max-h-[500px]" :src="item.image_url" />
      </picture>
    </div>

    <div class="flex flex-col xl:gap-4">
      <div class="hidden xl:flex xl:flex-col gap-y-1.5">
        <Title>{{ item.title }}, {{ item.year }}</Title>

        <p class="text-xs xl:pt-2.5 xl:text-xl font-bold uppercase text-red tracking-widest">Milena Dmitrieva</p>
      </div>

      <div class="mt-4 xl:mt-auto">
        <div class="bg-gray-normal p-3 xl:p-6 h-full flex xl:flex-col justify-between">
          <div class="flex flex-col gap-y-1.5 xl:gap-y-2">
            <p>
              <span class="font-bold">Category: </span>
              <span class="">{{ item.category.name }}</span>
            </p>

            <p>
              <span class="font-bold">Styles:</span>
              <span class="">{{ item.style.name }}</span>
            </p>

            <p>
              <span class="font-bold">Mediums: </span>
              <span class="">{{ item.medium.name }}</span>
            </p>

            <p>
              <span class="font-bold">Size: </span>
              <span class="">{{ item.size }}</span>
            </p>
          </div>

          <div class="flex justify-between mt-4">
            <Button class="mt-auto">Write to me</Button>
            <!-- <p class="mt-auto font-bold text-xl xl:text-3xl">{{ item.price }}$</p> -->
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 xl:mt-[100px]">
      <Title class="xl:pt-3">Description</Title>

      <p class="leading-6 mt-4 xl:mt-5 xl:text-lg">
        {{ item.description }}
      </p>
    </div>

    <div class="mt-4 xl:mt-[100px] flex flex-col">
      <Title class="xl:pt-3">Details</Title>

      <div class="xl:mt-4 mt-5 flex">
        <div class="bg-gray-normal p-3 xl:p-6 flex flex-col w-full gap-y-1.5 xl:gap-y-3">
          <p>
            <span class="font-bold xl:text-lg">Rarity: </span>
            <span class="xl:text-md">{{ item.rarity.name }}</span>
          </p>

          <p>
            <span class="font-bold xl:text-lg">Ready to Hang: </span>
            <span class="xl:text-md">{{ item.hanged ? 'Yes' : 'No' }}</span>
          </p>

          <p>
            <span class="font-bold xl:text-lg">Frame: </span>
            <span class="xl:text-md">{{ item.framed ? 'Yes' : 'No' }}</span>
          </p>

          <p>
            <span class="font-bold xl:text-lg">Packaging: </span>
            <span class="xl:text-md">{{ item.packaging.name }}</span>
          </p>
        </div>
      </div>
    </div>

    <UiModal v-if="modalStore.activeId === modalId">
      <template #content>
        <picture>
          <img class="max-h-[500px] xl:max-h-[800px]" :src="item.image_url" />
        </picture>
      </template>

      <template #close>
        <UiSvgIcon
          name="cross"
          class="absolute w-3 h-3 right-3 top-3 xl:right-10 xl:top-10 xl:w-6 xl:h-6 cursor-pointer"
          @click="modalStore.closeModal"
        />
      </template>
    </UiModal>
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
