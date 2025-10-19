interface DropdownTitleProps {
  title: string
  isOpen: boolean
  isSelected: boolean
  isRequired: boolean
  isError: boolean
}

interface DropdownTitleEmits {
  toggle: [isOpen: boolean]
}

export { DropdownTitleProps, DropdownTitleEmits }
