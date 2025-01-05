import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Art } from '@types'

export const useArtStore = defineStore('art', () => {
  const fetchedArts = ref<Art[]>([])
  const arts = ref<Art[]>([])
  const art = ref<Art>()
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function getAllArts(params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axios.get('/api/arts', {
        params: {
          ...params,
          select:
            '*,art_categories(*),art_countries(*),art_materials(*),art_mediums(*),art_styles(*)',
        },
      })

      fetchedArts.value = data
      arts.value = data
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  async function getArtById(id: number, params: object = {}) {
    isLoading.value = true
    error.value = null

    try {
      const { data } = await axios.get('/api/arts', {
        params: {
          ...params,
          id: `eq.${id}`,
          select:
            '*,art_categories(*),art_countries(*),art_materials(*),art_mediums(*),art_styles(*),art_packaging(*),art_rarities(*)',
        },
      })

      art.value = data[0]
    } catch (err: any) {
      error.value = err.message || 'Failed to fetch categories'
    } finally {
      isLoading.value = false
    }
  }

  const filterArts = (filters: any) => {
    arts.value = fetchedArts.value.filter((art) => {
      // Если указан фильтр `all` и он равен `true`, возвращаем все элементы
      if (filters.all) {
        return true
      }

      return Object.entries(filters).every(([key, filterValue]) => {
        if (filterValue === 'all') {
          return true // Пропускаем обработку `all`
        }

        const artValue = art[key as keyof Art]

        if (Array.isArray(filterValue)) {
          // Если фильтр — массив, проверяем, что значение входит в массив
          return filterValue.length === 0 || filterValue.includes(artValue)
        }

        // Если фильтр — одиночное значение, проверяем на равенство
        return !filterValue || artValue === filterValue
      })
    })
  }

  return { arts, art, isLoading, error, getAllArts, filterArts, getArtById }
})
