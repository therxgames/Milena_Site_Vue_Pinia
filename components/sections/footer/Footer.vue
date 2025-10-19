<script setup lang="ts">
import type { FooterEmits, FooterProps } from './types';

const props = defineProps<FooterProps>()
const emit = defineEmits<FooterEmits>()

const social = computed(() => [
  {
    name: 'gmail',
    link: 'mailto:rostislav.mikhailov.art@gmail.com',
  },
  {
    name: 'telegram',
    link: 'https://t.me/to_3e_sun',
  },
  {
    name: 'instagram',
    link: 'https://www.instagram.com/r.mikhailov.art/',
  },
])
</script>

<template>
  <footer class="footer relative flex items-center py-[50px] xl:py-[150px] xl:mt-[100px] xs:mt-[100px]">
    <div class="absolute left-0">
      <SharedSocial :list="social" />
    </div>

    <div class="text-xl xl:text-5xl font-bold xl:leading-[36px] absolute left-1/2 transform -translate-x-1/2">
      Let's talk?
    </div>

    <!-- <div class="absolute right-0">
      <Button @click="modalStore.openModal(id)">Make request</Button>

      <Modal @close="modalStore.closeModal" v-if="modalStore.activeModalId === id">
        <RequestModal />
      </Modal>
    </div> -->
  </footer>
</template>

<style scoped>
@screen xl {
  .footer::before  {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -30px);
    content: '';
    width: 2px;
    height: 60px;
    background: theme('colors.red');
  }
}
</style>
