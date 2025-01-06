<script setup lang="ts">
import { Footer } from './Footer'
import { Header } from './Header'
</script>

<template>
  <div class="container m-auto flex flex-col min-h-[100vh]">
    <Header />

    <main class="grow relative">
      <slot />
    </main>

    <Footer />
  </div>
</template>
