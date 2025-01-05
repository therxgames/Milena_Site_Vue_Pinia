<script setup lang="ts">
import { Breadcrumbs, Navigation } from '@shared'
</script>

<template>
  <header>
    <div class="flex justify-between items-center py-4 my-10 select-none">
      <RouterLink to="/" class="text-4xl font-bold leading-[36px] cursor-pointer">
        Milena.
      </RouterLink>

      <Navigation />
    </div>

    <Breadcrumbs />
  </header>
</template>
