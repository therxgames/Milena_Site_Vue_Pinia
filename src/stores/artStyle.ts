import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ArtStyle } from '@types'

export const useArtStyleStore = defineStore('artStyle', () => {
  const styles = ref<ArtStyle[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllStyles(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axios.get('/api/art_styles', {
        params: {
          ...params,
          select: '*',
        },
      })

      styles.value = data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  return { styles, isLoading, error, getAllStyles }
})
