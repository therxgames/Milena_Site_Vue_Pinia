import {
  ArtCategory,
  ArtCountry,
  ArtMaterial,
  ArtMedium,
  ArtPackaging,
  ArtRarities,
  ArtStyle,
} from '../api'

export interface Art {
  id: number
  created_at: string
  title: string
  description: string
  size: string
  year: number
  image_url: string
  price: number
  category_id: number
  country_id: number
  material_id: number
  medium_id: number
  style_id: number
  framed: boolean
  hanged: boolean
  art_categories: ArtCategory
  art_countries: ArtCountry
  art_materials: ArtMaterial
  art_mediums: ArtMedium
  art_styles: ArtStyle
  art_rarities: ArtRarities
  art_packaging: ArtPackaging
}
