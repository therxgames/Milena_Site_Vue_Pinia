<script setup lang="ts">
import SvgIcon from './SvgIcon.vue'
import { useModalStore } from '@/stores/modal'

const modalStore = useModalStore()
</script>

<template>
  <div
    class="h-screen w-screen bg-gray-normal bg-opacity-70 fixed z-50 top-0 left-0 flex items-center justify-center"
    @click.self="modalStore.closeModal"
  >
    <div class="relative">
      <slot></slot>

      <SvgIcon
        name="cross"
        class="absolute right-10 top-10 cursor-pointer"
        @click="modalStore.closeModal"
      />
    </div>
  </div>
</template>
