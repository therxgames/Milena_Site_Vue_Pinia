import { Option } from '../types'

interface DropdownItemProps {
  isActive: boolean
  item: Option
}

interface DropdownItemEmits {
  click: [value: string | number]
}

export { DropdownItemProps, DropdownItemEmits }
