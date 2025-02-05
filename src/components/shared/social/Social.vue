<script setup lang="ts">
import { SocialItem } from './SocialItem'
import { SocialEmits, SocialProps } from './types'

const props = defineProps<SocialProps>()
const emit = defineEmits<SocialEmits>()
</script>

<template>
  <div class="flex items-center justify-center gap-2 xl:gap-4">
    <SocialItem v-for="item in list" :name="item.name" :link="item.link" />
  </div>
</template>

<style scoped lang="scss"></style>
