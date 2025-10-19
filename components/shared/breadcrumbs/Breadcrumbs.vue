<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { BreadcrumbsEmits, BreadcrumbsProps } from './types'

const props = defineProps<BreadcrumbsProps>()
const emit = defineEmits<BreadcrumbsEmits>()

const route = useRoute()
const router = useRouter()
</script>

<template>
  <div>{{}}</div>
</template>
