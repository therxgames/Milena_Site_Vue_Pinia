<script setup lang="ts">
import WorkList from './ui/WorkList.vue'
</script>

<template>
  <div class="pt-[150px]">
    <div class="title_box relative">
      <h1 class="text-5xl leading-tight font-bold pt-3">Works</h1>

      <p class="pt-2.5 font-bold uppercase text-red tracking-widest">Things we've made</p>
    </div>
  </div>

  <WorkList />
</template>

<style scoped lang="scss">
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
