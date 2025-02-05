<script setup lang="ts">
import { SvgIcon } from '@ui'
import { SocialItemEmits, SocialItemProps } from './types'

const props = defineProps<SocialItemProps>()
const emit = defineEmits<SocialItemEmits>()
</script>

<template>
  <a :href="link" target="_blank">
    <div
      class="flex items-center justify-center border-2 border-red rounded-full w-7 h-7 xl:w-[50px] xl:h-[50px]"
    >
      <SvgIcon :name="name" fill="white" class="w-3 xl:w-[25px]" />
    </div>
  </a>
</template>

<style scoped lang="scss"></style>
