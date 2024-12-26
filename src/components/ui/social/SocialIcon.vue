<script setup lang="ts">
import { Social } from '@/types'
import SvgIcon from '../SvgIcon.vue'

interface Props {
  name: Social
  link: string
}

defineProps<Props>()
</script>

<template>
  <a :href="link" target="_blank">
    <div
      class="flex items-center justify-center border-2 border-red rounded-full w-[50px] h-[50px]"
    >
      <SvgIcon :name="name" />
    </div>
  </a>
</template>

<style scoped lang="scss"></style>
