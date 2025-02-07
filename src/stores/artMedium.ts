import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ArtMedium } from '@types'
import { axiosInstance } from '@utils'

export const useArtMediumStore = defineStore('artMedium', () => {
  const mediums = ref<ArtMedium[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllMediums(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axiosInstance.get('/art_materials', {
        params: {
          ...params,
          select: '*',
        },
      })

      mediums.value = data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  return { mediums, isLoading, error, getAllMediums }
})
