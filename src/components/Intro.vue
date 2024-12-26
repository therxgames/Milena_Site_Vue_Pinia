<script setup lang="ts">
import { RouterLink } from 'vue-router'
import MilenaImg from '@assets/images/milena.jpg'
import Button from './ui/Button.vue'
</script>

<template>
  <div class="pt-[150px] grid grid-cols-2 gap-x-5">
    <div class="title_box relative flex flex-col justify-center gap-10">
      <h1 class="text-7xl font-bold">"Art That Speaks for You"</h1>

      <RouterLink to="/works">
        <Button>Go to my works</Button>
      </RouterLink>
    </div>

    <div>
      <img :src="MilenaImg" />
    </div>
  </div>
</template>

<style>
.title_box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 3px;
  width: 20%;
  background: theme('colors.red');
}
</style>
