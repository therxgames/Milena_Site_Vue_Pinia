<script setup lang="ts">
import { DropdownItem } from '../DropdownItem'
import { DropdownListEmits, DropdownListProps } from './types'

const props = defineProps<DropdownListProps>()
const emit = defineEmits<DropdownListEmits>()
</script>

<template>
  <ul
    class="absolute z-20 w-full bg-white border-2 border-t-0 border-gray-light max-h-[200px] overflow-y-auto py-2"
  >
    <DropdownItem
      v-for="(option, index) in options"
      :key="index"
      :is-active="Boolean(activeValue === option.value)"
      :item="option"
      @click="emit('change', option)"
    />
  </ul>
</template>

<style scoped lang="scss"></style>
