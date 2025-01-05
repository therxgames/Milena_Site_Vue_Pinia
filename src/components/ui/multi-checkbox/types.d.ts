import { Option } from '../select/types'

interface MultiCheckboxProps {
  options: Option[]
  name: string
}

interface MultiCheckboxEmits {
  change: [value: (string | number)[]]
}

export { MultiCheckboxProps, MultiCheckboxEmits }
