import type { ArtsMetadataItem } from "@app-types/api/artsMetadataApi"

interface CategoryFilterProps {
  categories: ArtsMetadataItem[]
}

interface CategoryFilterEmits {}

export { CategoryFilterProps, CategoryFilterEmits }
