import { ArtCategory } from '@types'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { axiosInstance } from '@utils'

export const useArtCategoryStore = defineStore('artCategory', () => {
  const categories = ref<ArtCategory[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllCategories(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axiosInstance.get('/art_categories', {
        params: {
          ...params,
          select: '*',
        },
      })

      categories.value = data
    } catch (err: any) {
      console.log('err', err)
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  return { categories, isLoading, error, getAllCategories }
})
