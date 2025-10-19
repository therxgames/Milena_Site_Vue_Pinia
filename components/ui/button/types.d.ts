interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  size?: 'lg' | 'md' | 'sm',
  color?: 'primary'
}

interface ButtonEmits {
  click: []
  customClick: [value: string]
}

export { ButtonProps, ButtonEmits }
