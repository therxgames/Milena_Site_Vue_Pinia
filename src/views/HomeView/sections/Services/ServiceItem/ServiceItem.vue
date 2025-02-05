<script setup lang="ts">
import { computed } from 'vue'
import { SvgIcon, Modal, Title } from '@ui'
import { useModalStore } from '@stores'
import { ServiceItemEmits, ServiceItemProps } from './types'

const props = defineProps<ServiceItemProps>()
const emit = defineEmits<ServiceItemEmits>()

const modalStore = useModalStore()
const activeModalId = computed(() => modalStore.activeModalId === props.id)
</script>

<template>
  <Modal @close="modalStore.closeModal" v-if="activeModalId" class="px-5">
    <div class="bg-black p-5 xl:min-h-[500px] xl:w-[800px] xl:p-10">
      <p class="leading-none text-xs xl:text-xl font-bold uppercase text-red">Milena Dmitrieva's Expertise</p>

      <h1 class="text-xl font-bold pt-2 xl:text-4xl xl:pt-6">{{ title }}</h1>

      <hr class="h-0.5 xl:h-1 text-transparent bg-red mt-2 xl:mt-5" />

      <p class="text-gray-dark text-xs xl:text-lg pt-2 xl:pt-5">
        {{ description }}
      </p>
    </div>
  </Modal>

  <div
    class="relative p-3 xl:p-[30px] bg-gray-normal group cursor-pointer"
    @click="modalStore.openModal(id)"
  >
    <div class="relative z-10 flex items-center justify-between gap-x-4">
      <p class="text-xs xl:text-lg font-bold">{{ title }}</p>
      <SvgIcon name="cursor-pointer" class="w-[15px] xl:w-[35px]" />
    </div>

    <div
      class="absolute top-0 left-0 h-full w-0 bg-red transition-all duration-300 group-hover:w-full"
    ></div>
  </div>
</template>

<style></style>
