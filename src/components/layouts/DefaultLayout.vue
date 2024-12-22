<script setup lang="ts">
import MainHeader from '../ui/layout/MainHeader.vue'
</script>

<template>
  <div class="container m-auto">
    <MainHeader />

    <main>
      <slot />
    </main>
  </div>
</template>
