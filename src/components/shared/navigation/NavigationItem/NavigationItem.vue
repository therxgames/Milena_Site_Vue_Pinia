<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { NavigationItemEmits, NavigationItemProps } from './types'

const props = defineProps<NavigationItemProps>()
const emit = defineEmits<NavigationItemEmits>()
</script>

<template>
  <RouterLink
    :to="link"
    class="text-sm border-b-[1px] xl:text-xl xl:leading-6 xl:border-b-2 font-bold pb-0.5 cursor-pointer border-transparent hover:text-red hover:border-b-red"
    active-class="text-red border-b-red"
  >
    {{ title }}
  </RouterLink>
</template>
