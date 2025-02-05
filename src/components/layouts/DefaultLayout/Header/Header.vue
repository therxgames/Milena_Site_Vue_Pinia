<script setup lang="ts">
import { Breadcrumbs, Navigation } from '@shared'
</script>

<template>
  <header>
    <div class="flex justify-between items-center select-none my-4 xl:my-10">
      <RouterLink to="/" class="xl:text-4xl xl:leading-[36px] font-bold cursor-pointer">
        Milena.
      </RouterLink>

      <Navigation />
    </div>

    <Breadcrumbs />
  </header>
</template>
