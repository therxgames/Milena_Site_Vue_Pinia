interface NavigationItem {
  title: string
  link: string
}

interface NavigationProps {
  list: NavigationItem[]
}

interface NavigationEmits {}

export { NavigationProps, NavigationEmits }
