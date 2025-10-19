<script setup lang="ts">
import { NavigationItem } from './NavigationItem'
import type { NavigationEmits, NavigationProps } from './types'

const props = defineProps<NavigationProps>()
const emit = defineEmits<NavigationEmits>()
</script>

<template>
  <div class="flex gap-x-4 xl:gap-x-10">
    <NavigationItem v-for="item in list" :title="item.title" :link="item.link" />
  </div>
</template>
