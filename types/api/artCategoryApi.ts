import type { ArtCategoryModel } from "@app-types/models"

export interface ArtCategoriesRequestApi {
  search?: string
  limit?: number
  offset?: number
}

export type ArtCategoriesResponseApi = {
  categories: ArtCategoryModel[]
}
