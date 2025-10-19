
import type { ArtCategoryModel } from "@app-types/models"
import { ROUTES } from "@config"

export const useArtsStore = defineStore('arts', () => {
  const arts = ref([])
  const categories = ref<ArtCategoryModel[]>([])

  const fetchCategories = async () => {
    const { data, error } = await useApiFetch<ArtCategoryModel[]>(ROUTES.ART_CATEGORIES)

    if (!error.value) {
      categories.value = data.value || []
    } else {
      console.error('Ошибка при получении категорий:', error.value)
    }
  }

  return {
    arts,
    categories,
    fetchCategories
  }
})
