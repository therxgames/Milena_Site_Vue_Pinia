<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '@/utils'
import { SvgIconEmits, SvgIconProps } from './types'

const props = defineProps<SvgIconProps>()
const emit = defineEmits<SvgIconEmits>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <div v-html="icon" />
</template>
