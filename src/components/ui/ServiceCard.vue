<script setup lang="ts">
import { useModalStore } from '@/stores'
import { computed } from 'vue'
import SvgIcon from './SvgIcon.vue'
import Modal from './Modal.vue'

interface Props {
  id: number
  title: string
  description: string
}

const props = defineProps<Props>()

const modalStore = useModalStore()
const activeModalId = computed(() => modalStore.activeModalId === props.id)
</script>

<template>
  <Modal @close="modalStore.closeModal" v-if="activeModalId">
    <div class="min-h-[500px] w-[800px] bg-black p-10">
      <p class="pt-2.5 font-bold uppercase text-red">Milena Dmitrieva's Expertise</p>
      <h1 class="text-4xl font-bold pt-6">{{ title }}</h1>

      <hr class="h-1 text-transparent bg-red mt-5" />

      <p class="text-gray-dark text-lg pt-5">
        {{ description }}
      </p>
    </div>
  </Modal>

  <div
    class="relative p-[30px] bg-gray-normal group cursor-pointer"
    @click="modalStore.openModal(id)"
  >
    <div class="relative z-10 flex items-center justify-between gap-x-4">
      <p class="text-lg font-bold">{{ title }}</p>
      <SvgIcon name="cursor-pointer" />
    </div>

    <div
      class="absolute top-0 left-0 h-full w-0 bg-red transition-all duration-300 group-hover:w-full te"
    ></div>
  </div>
</template>

<style></style>
