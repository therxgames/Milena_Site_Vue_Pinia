<script setup lang="ts">
import { computed } from 'vue'
import router from '@router'
import { NavigationItem } from './NavigationItem'
import { NavigationEmits, NavigationProps } from './types'

const props = defineProps<NavigationProps>()
const emit = defineEmits<NavigationEmits>()

const navList = computed(() => router.getRoutes().filter((item) => !item.meta.hidden))
</script>

<template>
  <div class="flex gap-x-10">
    <NavigationItem v-for="item in navList" :title="String(item.name)" :link="item.path" />
  </div>
</template>
