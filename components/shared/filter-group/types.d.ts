import { Option } from '@components/ui/select/types'
import { Component } from 'vue'

interface FilterGroupProps {
  title: string
  component: Component
  name: string
  options: Option[]
}

interface FilterGroupEmits {}

export { FilterGroupProps, FilterGroupEmits }
