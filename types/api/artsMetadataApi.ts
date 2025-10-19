import type { EArtMetadataCategoryName } from "@app-types/enums";

type ArtsMetadataCategoryName =
  | EArtMetadataCategoryName.Categories
  | EArtMetadataCategoryName.Materials
  | EArtMetadataCategoryName.Media
  | EArtMetadataCategoryName.Packagings
  | EArtMetadataCategoryName.Rarities
  | EArtMetadataCategoryName.Styles

export interface ArtsMetadataItem {
  id: number
  name: string
}

export type ArtsMetadataResponseApi = {
 [K in ArtsMetadataCategoryName]: ArtsMetadataItem[];
}
