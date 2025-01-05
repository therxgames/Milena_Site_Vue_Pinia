import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const activeModalId = ref<number | string | null>(null)

  const openModal = (id: number | string): void => {
    activeModalId.value = id
  }

  const closeModal = (): void => {
    activeModalId.value = null
  }

  return { activeModalId, openModal, closeModal }
})
