<script setup lang="ts">
import { computed, useId } from 'vue'
import { useModalStore } from '@stores'
import { Button, Modal } from '@ui'
import { RequestModal, Social } from '@shared'
import { FooterEmits, FooterProps } from './types'
import { SocialLink } from '@types'

const props = defineProps<FooterProps>()
const emit = defineEmits<FooterEmits>()

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

const modalStore = useModalStore()
const id = useId()
</script>

<template>
  <footer class="footer relative py-[150px] mt-[100px] flex items-center">
    <div class="absolute left-0">
      <Social :list="social" />
    </div>

    <div class="text-5xl font-bold leading-[36px] absolute left-1/2 transform -translate-x-1/2">
      Let's talk?
    </div>

    <div class="absolute right-0">
      <Button @click="modalStore.openModal(id)">Make request</Button>

      <Modal @close="modalStore.closeModal" v-if="modalStore.activeModalId === id">
        <RequestModal />
      </Modal>
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
