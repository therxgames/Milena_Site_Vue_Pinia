<script setup lang="ts">
import { SelectEmits } from '../select/types'
import { ButtonProps } from './types'

const { type = 'button' } = defineProps<ButtonProps>()
const emit = defineEmits<SelectEmits>()
</script>

<template>
  <div class="relative group w-fit">
    <button
      class="whitespace-nowrap py-1 px-2 text-xs xl:py-5 xl:px-12 xl:text-xl xl:font-bold border-2 relative z-10 bg-transparent border-red"
      :type="type"
    >
      <slot />
    </button>

    <div
      class="absolute top-0 left-0 h-full w-0 bg-red transition-all duration-300 group-hover:w-full"
    ></div>
  </div>
</template>
