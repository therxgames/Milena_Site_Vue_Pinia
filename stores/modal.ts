export const useModalStore = defineStore('modal', () => {
  const activeId = ref<string | null>(null)

  const openModal = (id: string) => {
    activeId.value = id
  }

  const closeModal = () => {
    activeId.value = null
  }

  return {
    activeId,
    openModal,
    closeModal,
  }
})
