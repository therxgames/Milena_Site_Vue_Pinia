import { icons } from '@/utils'

interface SvgIconProps {
  name: keyof typeof icons
  fill?: string
}

interface SvgIconEmits {}

export { SvgIconProps, SvgIconEmits }
