interface Option {
  title: string
  value: string | number
}

interface Select {
  title?: string
  options: Option[]
}

interface SelectProps extends Select {
  name: string
  required?: boolean
  size: 'lg' | 'md' | 'sm'
}

interface SelectEmits {
  change: [value: string | number]
}

export { SelectProps, SelectEmits, Select, Option }
