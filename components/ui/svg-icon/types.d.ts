import { icons } from '@config'

interface SvgIconProps {
  name: keyof typeof icons
  fill?: string
}

interface SvgIconEmits {}

export { SvgIconProps, SvgIconEmits }
