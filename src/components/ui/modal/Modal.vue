<script setup lang="ts">
import { useModalStore } from '@stores'
import { SvgIcon } from '@ui'
import { ModalEmits, ModalProps } from './types'

const props = defineProps<ModalProps>()
const emit = defineEmits<ModalEmits>()

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
        class="absolute right-14 top-14 cursor-pointer"
        @click="modalStore.closeModal"
      />
    </div>
  </div>
</template>
