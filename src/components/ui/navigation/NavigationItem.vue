<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  title: string
  link: string
}

defineProps<Props>()
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
