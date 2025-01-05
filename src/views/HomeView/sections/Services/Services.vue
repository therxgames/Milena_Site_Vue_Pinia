<script setup lang="ts">
import { ServiceList } from './ServiceList'
import { ServiceEmits, ServiceProps } from './types'

const props = defineProps<ServiceProps>()
const emit = defineEmits<ServiceEmits>()
</script>

<template>
  <div class="pt-[150px]">
    <div class="title_box relative">
      <h1 class="text-5xl leading-tight font-bold pt-3">Core Competencies.</h1>

      <p class="pt-2.5 font-bold uppercase text-red tracking-widest">
        Milena Dmitrieva's Expertise
      </p>
    </div>

    <ServiceList />
  </div>
</template>

<style>
.title_box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 10%;
  background: theme('colors.red');
}
</style>
