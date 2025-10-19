<script setup lang="ts">
import type { FormErrorEmits, FormErrorProps } from './types'

const props = defineProps<FormErrorProps>()
const emit = defineEmits<FormErrorEmits>()
</script>

<template>
  <p class="absolute bottom-[calc(100%+3px)] left-0 text-red text-sm">
    {{ message }}
  </p>
</template>

<style scoped lang="scss"></style>
