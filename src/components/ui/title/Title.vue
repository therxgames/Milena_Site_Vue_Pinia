<script setup lang="ts">
import { TitleEmits, TitleProps } from './types';

const props = defineProps<TitleProps>()
const emit = defineEmits<TitleEmits>()
</script>

<template>
  <h1 class="text-2xl text-left xl:text-7xl font-bold">
    <slot />
  </h1>
</template>

<style scoped lang="scss"></style>
