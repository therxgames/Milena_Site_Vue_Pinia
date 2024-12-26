import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const activeModalId = ref<number | null>(null)

  const openModal = (id: number): void => {
    activeModalId.value = id
  }

  const closeModal = (): void => {
    activeModalId.value = null
  }

  return { activeModalId, openModal, closeModal }
})
