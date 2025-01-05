type ArtFiltersList = 'category' | 'style' | 'material' | 'medium'

interface ArtFilter<T> {
  id: number
  name: string
  type: T
}

type ArtCategoryFilter = ArtFilter<'category'>
type ArtStyleFilter = ArtFilter<'style'>
type ArtMaterialFilter = ArtFilter<'material'>
type ArtMediumFilter = ArtFilter<'medium'>

interface ArtFilters {
  categories: ArtCategoryFilter[]
  styles: ArtStyleFilter[]
  materials: ArtMaterialFilter[]
  mediums: ArtMediumFilter[]
}

export {
  ArtCategoryFilter,
  ArtStyleFilter,
  ArtMaterialFilter,
  ArtMediumFilter,
  ArtFilters,
  ArtFiltersList,
}
