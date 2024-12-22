<script setup lang="ts">
import { computed } from 'vue'
import NavigationItem from './NavigationItem.vue'
import router from '@/router'

const navList = computed(() => router.getRoutes())
</script>

<template>
  <div class="flex gap-x-10">
    <NavigationItem v-for="item in navList" :title="String(item.name)" :link="item.path" />
  </div>
</template>
