<script setup lang="ts">
import { computed, inject } from 'vue'
import { tv } from 'tailwind-variants'
import { SvgIcon } from '@ui'
import { DropdownTitleEmits, DropdownTitleProps } from './types'

const props = defineProps<DropdownTitleProps>()
const emit = defineEmits<DropdownTitleEmits>()

const size = inject('size', 'lg')

const chevronIconName = computed(() => (props.isOpen ? 'chevron-up' : 'chevron-down'))

const containerClasses = tv({
  base: 'flex items-center justify-between cursor-pointer p-3 outline-0 w-full border-2 bg-white',
  variants: {
    error: {
      true: 'border-red',
      false: 'border-gray-light',
    },
    size: {
      lg: 'p-3',
      md: 'p-2',
      sm: 'p-1',
    },
  },
})

const titleClasses = tv({
  base: 'text-black',
  variants: {
    selected: {
      false: 'text-gray-dark2',
    },
    error: {
      true: 'border-red',
    },
    size: {
      lg: 'text-base',
      md: 'text-sm',
      sm: 'text-xs',
    },
  },
})
</script>

<template>
  <div :class="containerClasses({ error: isError, size })" @click="emit('toggle', isOpen)">
    <p :class="titleClasses({ selected: isSelected, error: isError, size })">
      {{ title }} <span v-if="isRequired">*</span>
    </p>

    <SvgIcon :name="chevronIconName" />
  </div>
</template>

<style scoped lang="scss"></style>
