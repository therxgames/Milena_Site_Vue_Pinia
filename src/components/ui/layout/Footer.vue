<script setup lang="ts">
import { computed } from 'vue'
import Button from '../Button.vue'
import SocialList from '../social/SocialList.vue'
import { SocialLink } from '@/types'

const social = computed((): SocialLink[] => [
  {
    name: 'twitter',
    link: '/',
  },
  {
    name: 'facebook',
    link: '/',
  },
  {
    name: 'instagram',
    link: '/',
  },
])
</script>

<template>
  <footer class="footer relative py-[150px] mt-[100px] flex items-center">
    <div class="absolute left-0">
      <SocialList :list="social" />
    </div>

    <div class="text-5xl font-bold leading-[36px] absolute left-1/2 transform -translate-x-1/2">
      Let's talk?
    </div>

    <div class="absolute right-0">
      <Button>Make enquiry</Button>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer::before {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30px);
  content: '';
  width: 2px;
  height: 60px;
  background: theme('colors.red');
}
</style>
