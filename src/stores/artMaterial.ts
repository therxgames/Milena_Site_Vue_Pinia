import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ArtMaterial } from '@types'
import { axiosInstance } from '@utils'

export const useArtMaterialStore = defineStore('artMaterial', () => {
  const materials = ref<ArtMaterial[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllMaterials(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axiosInstance.get('/art_materials', {
        params: {
          ...params,
          select: '*',
        },
      })

      materials.value = data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  return { materials, isLoading, error, getAllMaterials }
})
