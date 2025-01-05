<script setup lang="ts">
import { tv } from 'tailwind-variants'
import { DropdownItemEmits, DropdownItemProps } from './types'
import { inject } from 'vue'

const props = defineProps<DropdownItemProps>()
const emit = defineEmits<DropdownItemEmits>()

const size = inject('size', 'lg')

const optionClasses = tv({
  base: 'px-4 py-2 text-black text-sm cursor-pointer hover:bg-gray-light',
  variants: {
    active: {
      true: 'font-bold bg-gray-light',
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
  <li :class="optionClasses({ active: isActive, size })" @click="emit('click', item.value)">
    {{ item.title }}
  </li>
</template>
