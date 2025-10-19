<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button, Title } from '@ui'
import { ROUTES } from '@config'

import type { IntroEmits, IntroProps } from './types'

const props = defineProps<IntroProps>()
const emit = defineEmits<IntroEmits>()
</script>

<template>
  <div class="pt-5 xl:pt-[150px] grid xl:grid-cols-2 xl:gap-x-5">
    <div class="title_box relative flex justify-between gap-3 xl:flex-col xl:justify-center xl:gap-10">
      <Title>"Art That Speaks"</Title>

      <Button>
        <RouterLink :to="ROUTES.WORKS">Go to my works</RouterLink>
      </Button>
    </div>

    <div class="mt-5 xl:mt-0">
      <img src="/images/milena.jpg" />
    </div>
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
