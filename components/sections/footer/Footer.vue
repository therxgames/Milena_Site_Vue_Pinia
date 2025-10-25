<script setup lang="ts">
import type { FooterEmits, FooterProps } from './types';

const props = defineProps<FooterProps>()
const emit = defineEmits<FooterEmits>()

const modalId = useId()
const modalStore = useModalStore()

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
  <footer class="footer relative grid grid-cols-[1fr_3fr_1fr] gap-1 xl:gap-5 items-center py-[50px] xl:py-[150px] xl:mt-[100px] xs:mt-[100px]">
    <div class="flex items-center justify-start gap-1 xl:gap-4">
      <SharedSocial :list="social" />
    </div>

    <div class="text-center grid gap-6">
      <p class=" text-xl xl:text-5xl font-bold xl:leading-[36px]">
        Let's talk?
      </p>

      <!-- <p class="text-xs">
        TIN: 345918084462
      </p> -->
    </div>

    <div class="absolute right-0">
      <UiButton @click="modalStore.openModal(modalId)">Make request</UiButton>

      <UiModal @close="modalStore.closeModal" v-if="modalStore.activeId === modalId">
        <SharedRequestModal />
      </UiModal>
    </div>
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
