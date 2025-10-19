import type { ArtMetadataModel } from "./artMetadataModel"

export interface ArtModel {
  id: number
  title: string
  year: string
  image_url: string
  price: string
  size: string
  description: string
  framed: boolean
  hanged: string
  category: ArtMetadataModel
  material: ArtMetadataModel
  medium: ArtMetadataModel
  packaging: ArtMetadataModel
  rarity: ArtMetadataModel
  style: ArtMetadataModel
}
