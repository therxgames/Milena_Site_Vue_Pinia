<script setup lang="ts">
import { SvgIcon } from '@ui'
import type { ModalEmits, ModalProps } from './types'
import { Teleport } from 'vue';

const props = defineProps<ModalProps>()
const emit = defineEmits<ModalEmits>()

const modalStore = useModalStore()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed flex items-center justify-center min-h-screen w-screen bg-gray-normal bg-opacity-70 z-50 top-0 left-0 px-4 xl:px-0"
      @click.self="modalStore.closeModal"
    >
      <div class="relative">
        <slot name="content"></slot>

        <slot name="close"></slot>
      </div>
    </div>
  </Teleport>
</template>
