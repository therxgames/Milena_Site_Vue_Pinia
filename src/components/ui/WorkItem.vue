<script setup lang="ts">
interface Props {}
</script>

<template>
  <div class="relative h-[360px] bg-gray-normal cursor-pointer flex items-center justify-center">
    <div class="relative z-10 text-center flex flex-col gap-y-2.5">
      <h1 class="text-2xl font-bold">Marine Life</h1>
      <p class="text-xl text-gray-dark2 uppercase font-bold">2024</p>
    </div>

    <div class="absolute top-0 left-0 w-full h-full z-1 opacity-10">
      <img src="/src/assets/images/art/marine-life.jpg" class="object-cover w-full h-full" />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
