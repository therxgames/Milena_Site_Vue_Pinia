<script setup lang="ts">
import Header from '../ui/layout/Header.vue'
import Footer from '../ui/layout/Footer.vue'
</script>

<template>
  <div class="container m-auto">
    <Header />

    <main>
      <slot />
    </main>

    <Footer />
  </div>
</template>
