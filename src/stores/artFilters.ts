import axios from 'axios'
import {
  ArtFilters,
  ArtCategoryFilter,
  ArtStyleFilter,
  ArtMaterialFilter,
  ArtMediumFilter,
} from '@types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useArtFiltersStore = defineStore('artFilters', () => {
  const filters = ref<ArtFilters>({
    categories: [],
    styles: [],
    materials: [],
    mediums: [],
  })

  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllFilters(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axios.get('/api/art_filters', {
        params: {
          ...params,
          select: '*',
        },
      })

      const groupedFilters: ArtFilters = {
        categories: data.filter((item: ArtCategoryFilter) => item.type === 'category'),
        styles: data.filter((item: ArtStyleFilter) => item.type === 'style'),
        materials: data.filter((item: ArtMaterialFilter) => item.type === 'material'),
        mediums: data.filter((item: ArtMediumFilter) => item.type === 'medium'),
      }

      filters.value = groupedFilters
    } catch (err: any) {
      console.log('err', err)
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  return { filters, isLoading, error, getAllFilters }
})
