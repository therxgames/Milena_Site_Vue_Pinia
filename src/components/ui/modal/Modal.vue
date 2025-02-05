<script setup lang="ts">
import { useModalStore } from '@stores'
import { SvgIcon } from '@ui'
import { ModalEmits, ModalProps } from './types'
import { Teleport } from 'vue';

const props = defineProps<ModalProps>()
const emit = defineEmits<ModalEmits>()

const modalStore = useModalStore()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed flex items-center justify-center min-h-screen w-screen bg-gray-normal bg-opacity-70 z-50 top-0 left-0"
      @click.self="modalStore.closeModal"
    >
      <div class="relative">
        <slot></slot>

        <SvgIcon
          name="cross"
          class="absolute w-3 h-3 right-5 top-5 xl:right-10 xl:top-10 xl:w-6 xl:h-6 cursor-pointer"
          @click="modalStore.closeModal"
        />
      </div>
    </div>
  </Teleport>
</template>
