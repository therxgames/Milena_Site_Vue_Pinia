import axios from 'axios'
import { ArtCategory } from '@types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArtCategoryStore = defineStore('artCategory', () => {
  const categories = ref<ArtCategory[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllCategories(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axios.get('/api/art_categories', {
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
