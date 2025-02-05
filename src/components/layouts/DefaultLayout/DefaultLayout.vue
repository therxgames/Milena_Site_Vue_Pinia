<script setup lang="ts">
import { computed } from 'vue';
import { Footer } from './Footer'
import { Header } from './Header'
</script>

<template>
  <div class="container flex flex-col min-h-[100vh] px-4 sm:px-0">
    <Header />

    <main class="grow relative">
      <slot />
    </main>

    <Footer />
  </div>
</template>
