<script setup lang="ts">
import { Title } from '@ui';
import { ServiceList } from './ServiceList'
import { ServiceEmits, ServiceProps } from './types'

const props = defineProps<ServiceProps>()
const emit = defineEmits<ServiceEmits>()
</script>

<template>
  <div class="pt-5 xl:pt-[150px]">
    <div class="title_box relative">
      <Title class="xl:pt-5">Core Competencies.</Title>

      <p class="pt-2.5 text-xs xl:text-xl font-bold uppercase text-red tracking-widest">
        Milena Dmitrieva's Expertise
      </p>
    </div>

    <ServiceList />
  </div>
</template>

<style scoped>
.title_box::before {
  display: none;
}

@screen xl {
  .title_box::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 20%;
    height: 3px;
    background-color: theme('colors.red');
  }
}
</style>
