<script setup lang="ts">
import { computed } from 'vue'
import { icons } from '@/utils'

interface Props {
  name: keyof typeof icons
}

const props = defineProps<Props>()

const icon = computed(() => icons[props.name])
</script>

<template>
  <div v-html="icon" />
</template>
