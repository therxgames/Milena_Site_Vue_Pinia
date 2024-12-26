<script setup lang="ts">
import { SocialLink } from '@/types'
import SocialIcon from './SocialIcon.vue'

interface Props {
  list: SocialLink[]
}

defineProps<Props>()
</script>

<template>
  <div class="flex items-center justify-center gap-4">
    <SocialIcon v-for="item in list" :name="item.name" :link="item.link" />
  </div>
</template>

<style scoped lang="scss"></style>
