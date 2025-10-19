import type { ArtModel } from '@app-types/models'
import { Art } from '@types'

interface WorkListProps {
  works: ArtModel[]
}

interface WorkListEmits {}

export { WorkListProps, WorkListEmits }
