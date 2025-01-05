<script setup lang="ts">
import { SvgIcon } from '@ui'
import { SocialItemEmits, SocialItemProps } from './types'

const props = defineProps<SocialItemProps>()
const emit = defineEmits<SocialItemEmits>()
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
