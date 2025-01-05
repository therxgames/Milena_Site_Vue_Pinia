<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { NavigationItemEmits, NavigationItemProps } from './types'

const props = defineProps<NavigationItemProps>()
const emit = defineEmits<NavigationItemEmits>()
</script>

<template>
  <RouterLink
    :to="link"
    class="font-bold leading-6 pb-0.5 cursor-pointer border-b-2 border-transparent hover:text-red hover:border-b-red"
    active-class="text-red border-b-red"
  >
    {{ title }}
  </RouterLink>
</template>
