import { Option } from '../types'

interface DropdownListProps {
  activeValue: string | number | unknown
  options: Option[]
}

interface DropdownListEmits {
  change: [option: Option]
}

export { DropdownListProps, DropdownListEmits }
