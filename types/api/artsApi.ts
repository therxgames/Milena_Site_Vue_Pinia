import type { ArtModel } from "@app-types/models"

export type ArtsResponseApi = {
  results: ArtModel[]
  count: number
  limit: number
}
