interface PaginationProps {
  pagesCount: number
  activePage: number
}

interface PaginationEmits {
  (e: 'update:activePage', page: number): void
}

export { PaginationProps, PaginationEmits }
