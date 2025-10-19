<script setup lang="ts">
import { tv } from 'tailwind-variants';
import type { ButtonProps, ButtonEmits } from './types'

const emit = defineEmits<ButtonEmits>()
const { type = 'button', size = 'lg', color = 'primary' } = defineProps<ButtonProps>()

const buttonClasses = tv({
  base: 'whitespace-nowrap relative z-10 bg-transparent border-2',
  variants: {
    size: {
      lg: 'py-2 px-3 xl:py-5 xl:px-12 text-xs xl:text-xl xl:font-bold',
      md: 'py-2 px-3 xl:py-2 xl:px-5 xl:text-md xl:font-bold',
      sm: 'py-2 px-3 xl:py-2 xl:px-5 xl:text-lg xl:font-bold',
    },
    color: {
      primary: 'border-red bg-transparent'
    }
  },
})

const transitionBlockClasses = tv({
  base: 'absolute top-0 left-0 h-full w-0 transition-all duration-300 group-hover:w-full',
  variants: {
    color: {
      primary: 'bg-red'
    }
  },
})
</script>

<template>
  <UiBox class="relative group w-fit">
    <button
      :class="buttonClasses({ size, color })"
      :type="type"
      @click="emit('click')"
    >
      <slot />
    </button>

    <UiBox :class="transitionBlockClasses({ color })"></UiBox>
  </UiBox>
</template>
